import { Client } from "@notionhq/client";

const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

export async function getTestimonials() {
  if (!process.env.NOTION_API_KEY || !process.env.NOTION_TESTIMONIALS_DB_ID) {
    return [];
  }

  try {
    const response = await notion.databases.query({
      database_id: process.env.NOTION_TESTIMONIALS_DB_ID,
      filter: {
        property: "Published",
        checkbox: { equals: true },
      },
      sorts: [{ property: "Date", direction: "descending" }],
    });

    return response.results;
  } catch {
    console.error("Failed to fetch testimonials from Notion");
    return [];
  }
}
