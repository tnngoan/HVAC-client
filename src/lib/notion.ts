import { Client } from "@notionhq/client";
import type { ContactFormData } from "@/lib/schemas";

const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  text: string;
}

export async function getTestimonials(): Promise<Testimonial[]> {
  if (!process.env.NOTION_API_KEY || !process.env.NOTION_TESTIMONIALS_DB_ID) {
    return [];
  }

  try {
    const response = (await notion.request({
      method: "post",
      path: `databases/${process.env.NOTION_TESTIMONIALS_DB_ID}/query`,
      body: {
        filter: {
          property: "Published",
          checkbox: { equals: true },
        },
        sorts: [{ property: "Date", direction: "descending" }],
      },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    })) as { results: Array<Record<string, any>> };

    return response.results
      .map((page) => ({
        id: page.id as string,
        name: (page.properties?.Name?.title?.[0]?.plain_text as string) ?? "Anonymous",
        rating: (page.properties?.Rating?.number as number) ?? 5,
        text: (page.properties?.Content?.rich_text?.[0]?.plain_text as string) ?? "",
      }))
      .filter((t) => t.text.length > 0);
  } catch {
    console.error("Failed to fetch testimonials from Notion");
    return [];
  }
}

export async function saveLeadToNotion(
  data: Omit<ContactFormData, "honeypot">
): Promise<void> {
  if (!process.env.NOTION_API_KEY || !process.env.NOTION_LEADS_DB_ID) {
    return;
  }

  try {
    await notion.request({
      method: "post",
      path: "pages",
      body: {
        parent: { database_id: process.env.NOTION_LEADS_DB_ID },
        properties: {
          Name: { title: [{ text: { content: data.name } }] },
          Email: { email: data.email },
          Phone: { phone_number: data.phone },
          Service: { select: { name: data.serviceType } },
          "Property Type": { select: { name: data.propertyType } },
          Message: { rich_text: [{ text: { content: data.message } }] },
          Status: { select: { name: "New" } },
        },
      },
    });
  } catch {
    // Non-critical — don't block the user request if Notion save fails
    console.error("Failed to save lead to Notion");
  }
}
