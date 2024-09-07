import 'server-only';
import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL
});

export const statusEnum = ['active', 'inactive', 'archived'];

export async function getProducts(
  search: string,
  offset: number
): Promise<{
  products: any[];
  newOffset: number | null;
  totalProducts: number;
}> {
  const client = await pool.connect();

  try {
    if (search) {
      const result = await client.query(
        'SELECT * FROM products WHERE name ILIKE $1 LIMIT 1000',
        [`%${search}%`]
      );
      console.log(result.rows);

      return {
        products: result.rows,
        newOffset: null,
        totalProducts: 0
      };
    }

    if (offset === null) {
      return { products: [], newOffset: null, totalProducts: 0 };
    }

    const totalProductsResult = await client.query(
      'SELECT COUNT(*) FROM products'
    );
    const totalProducts = parseInt(totalProductsResult.rows[0].count, 10);

    const moreProductsResult = await client.query(
      'SELECT * FROM products LIMIT 5 OFFSET $1',
      [offset]
    );
    const moreProducts = moreProductsResult.rows;
    const newOffset = moreProducts.length >= 5 ? offset + 5 : null;

    return {
      products: moreProducts,
      newOffset,
      totalProducts
    };
  } finally {
    client.release();
  }
}

export async function deleteProductById(id: number) {
  const client = await pool.connect();

  try {
    await client.query('DELETE FROM products WHERE id = $1', [id]);
  } finally {
    client.release();
  }
}
