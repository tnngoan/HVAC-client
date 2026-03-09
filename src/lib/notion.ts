import { Client } from "@notionhq/client";

const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

export async function getTestimonials() {
  if (!process.env.NOTION_API_KEY || !process.env.NOTION_TESTIMONIALS_DB_ID) {
    return [];
  }

  try {
    const response = await notion.request({
      method: "post",
      path: `databases/${process.env.NOTION_TESTIMONIALS_DB_ID}/query`,
      body: {
        filter: {
          property: "Published",
          checkbox: { equals: true },
        },
        sorts: [{ property: "Date", direction: "descending" }],
      },
    });

    return (response as { results: unknown[] }).results;
  } catch {
    console.error("Failed to fetch testimonials from Notion");
    return [];
  }
}
