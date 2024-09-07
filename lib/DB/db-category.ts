import 'server-only';

import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import {
  pgTable,
  serial,
  text,
  varchar
  //   numeric,
  //   integer,
  //   timestamp,
  //   pgEnum,
} from 'drizzle-orm/pg-core';
import { count, eq, ilike } from 'drizzle-orm';
import { createInsertSchema } from 'drizzle-zod';

export const db = drizzle(neon(process.env.POSTGRES_URL!));

//export const statusEnum = pgEnum('status', ['active', 'inactive', 'archived']);

export const categoryContent = pgTable('frm_categories', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 255 }).notNull().unique(),
  description: text('description')
});

export type CategoryContent = typeof categoryContent.$inferSelect;
export const insertCategorySchema = createInsertSchema(categoryContent);

// interface UpsertCategoryParams {
//   id?: number; // Optional: ID to update an existing category
//   name: string;
//   description?: string;
// }

export type UpsertCategoryContent = Partial<Omit<CategoryContent, 'id'>>;

export async function getCategoryContent(): Promise<{
  categoryContent: CategoryContent;
}> {
  const content = await db
    .select()
    .from(categoryContent)
    .where(eq(categoryContent.id, 1))
    .limit(1)
    .execute(); // Execute the query

  return { categoryContent: content[0] };
}

interface DeleteCategoryParams {
  id: number;
}

export async function getCategories() {
  try {
    const categories = await db.select().from(categoryContent).execute();
    return categories;
  } catch (error) {
    console.error('Error fetching categories:', error);
    throw error;
  }
}

export async function upsertCategory(
  id: number,
  data: UpsertCategoryContent
): Promise<void> {
  try {
    // Check if the category with the given ID exists
    const existingRecord = await db
      .select()
      .from(categoryContent)
      .where(eq(categoryContent.id, id))
      .limit(1)
      .execute();

    if (existingRecord.length > 0) {
      // Record exists, so update it
      await db
        .update(categoryContent)
        .set(data)
        .where(eq(categoryContent.id, id))
        .execute();
    } else {
      // Record does not exist, so insert a new one
      await db
        .insert(categoryContent)
        .values({
          id,
          name: data.name || 'Default Name', // Default value if name is missing
          description: data.description ?? null
        })
        .execute();
      // .values({ id, ...data })
      // .execute();
    }
  } catch (error) {
    console.error('Error upserting category:', error);
    throw error; // Propagate the error for further handling
  }
}

// export async function getProducts(
//   search: string,
//   offset: number
// ): Promise<{
//   products: SelectProduct[];
//   newOffset: number | null;
//   totalProducts: number;
// }> {
//   // Always search the full table, not per page
//   if (search) {
//     return {
//       products: await db
//         .select()
//         .from(products)
//         .where(ilike(products.name, `%${search}%`))
//         .limit(1000),
//       newOffset: null,
//       totalProducts: 0
//     };
//   }

//   if (offset === null) {
//     return { products: [], newOffset: null, totalProducts: 0 };
//   }

//   let totalProducts = await db.select({ count: count() }).from(products);
//   let moreProducts = await db.select().from(products).limit(5).offset(offset);
//   let newOffset = moreProducts.length >= 5 ? offset + 5 : null;

//   return {
//     products: moreProducts,
//     newOffset,
//     totalProducts: totalProducts[0].count
//   };
// }

interface DeleteCategoryParams {
  id: number;
}

export async function deleteCategoryById({
  id
}: DeleteCategoryParams): Promise<void> {
  try {
    await db
      .delete(categoryContent) // Pass the table to the delete method
      .where(eq(categoryContent.id, id)) // Use eq to compare the id
      .execute();
  } catch (error) {
    console.error('Error deleting category:', error);
    throw error;
  }
}

// export async function deleteCategory1({ id }: DeleteCategoryParams): Promise<void> {
//   try {
//     await db
//       .delete()
//       .from(categoryContent)
//       .where(categoryContent.id.equals(id))
//       .execute();
//   } catch (error) {
//     console.error('Error deleting category:', error);
//     throw error;
//   }
// }

// export async function deleteProductById(id: number) {
//   await db.delete(products).where(eq(products.id, id));
// }
