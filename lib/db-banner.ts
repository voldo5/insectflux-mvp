import 'server-only';

import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import {
  pgTable,
  serial,
  text,
  boolean,
  timestamp,
  numeric,
  integer,
  pgEnum,
  customType
} from 'drizzle-orm/pg-core';
import { count, eq, ilike } from 'drizzle-orm';
import { createInsertSchema } from 'drizzle-zod';
import { Buffer } from 'node:buffer';

export const db = drizzle(neon(process.env.POSTGRES_URL!));

export const statusEnum = pgEnum('status', ['active', 'inactive', 'archived']);

// Define the BYTEA type as a generic binary type
const bytea = {
  toDriver(value: any): any {
    return value; // Pass through as-is, assumes value is in the correct format
  },
  fromDriver(value: any): any {
    return value; // Pass through as-is, assumes value is in the correct format
  }
};

export const banners = pgTable('banners', {
  id: serial('id').primaryKey(),
  active: boolean('active').default(true),
  createdAt: timestamp('created_at').defaultNow(),
  image: text('image'), // Use text to store Base64-encoded binary data
  imageUrl: text('image_url'),
  imagePlaceholder: text('image_placeholder')
    .notNull()
    .default('http://example.com/images/banner-placeholder.png')
});

// Infer the TypeScript types
export type Banner = typeof banners.$inferSelect;
export type NewBanner = typeof banners.$inferInsert;
//export type HomeContent = typeof homeContent.$inferSelect;
export const insertBannerSchema = createInsertSchema(banners);

// Utility functions for Base64 encoding/decoding
export function encodeToBase64(buffer: Buffer): string {
  return buffer.toString('base64');
}

export function decodeFromBase64(base64String: string): Buffer {
  return Buffer.from(base64String, 'base64');
}

// export async function getActiveBanner(): Promise<Banner | null> {
//   try {
//     const [activeBanner] = (await db
//       .select()
//       .from(banners)
//       .where(eq(banners.active, true))
//       .execute()) as unknown as Banner[];

//     return activeBanner || null; // Return the first result or null if none found
//   } catch (error) {
//     console.error('Error fetching active banner:', error);
//     throw new Error('Failed to fetch active banner');
//   }
// }
