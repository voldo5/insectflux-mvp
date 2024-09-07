import 'server-only';

import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import {
  pgTable,
  text,
  numeric,
  integer,
  timestamp,
  pgEnum,
  serial
} from 'drizzle-orm/pg-core';
import { count, eq, ilike } from 'drizzle-orm';
import { createInsertSchema } from 'drizzle-zod';

export const db = drizzle(neon(process.env.POSTGRES_URL!));

export const statusEnum = pgEnum('status', ['active', 'inactive', 'archived']);

export const homeContent = pgTable('homecontent', {
  id: serial('id').primaryKey(),
  overview: text('overview'),
  featuredProducts: text('featured_products'),
  featuredCompanies: text('featured_companies'),
  promotions: text('promotions'),
  successStories: text('success_stories'),
  createdAt: timestamp('created_at').defaultNow()
});

export type HomeContent = typeof homeContent.$inferSelect;
export const insertHomeContentSchema = createInsertSchema(homeContent);

export async function getHomeContent(): Promise<{
  homeContent: HomeContent;
}> {
  const content = await db
    .select()
    .from(homeContent)
    .where(eq(homeContent.id, 1))
    .limit(1)
    .execute(); // Execute the query

  return { homeContent: content[0] };
}

//Partial<HomeContent>: This allows to update only specific fields
// of the homecontent record, making it optional to provide all fields.
// Combine Partial and Omit:
export type UpsertHomeContent = Partial<Omit<HomeContent, 'id'>>;

// Usage in upsert function:
export async function upsertHomeContent(
  id: number,
  data: UpsertHomeContent
): Promise<void> {
  const existingRecord = await db
    .select()
    .from(homeContent)
    .where(eq(homeContent.id, id))
    .limit(1)
    .execute();

  if (existingRecord.length > 0) {
    // Record exists, so update it
    await db
      .update(homeContent)
      .set(data)
      .where(eq(homeContent.id, id))
      .execute();
  } else {
    // Record does not exist, so insert a new one
    await db
      .insert(homeContent)
      .values({ id, ...data })
      .execute();
  }
}

// export async function updateHomeContent(
//   id: number,
//   data: Partial<HomeContent>
// ): Promise<void> {
//   await db
//     .update(homeContent)
//     .set(data) // Set the new values
//     .where(eq(homeContent.id, id)) // Specify the condition to match the correct record
//     .execute(); // Execute the query
// }
