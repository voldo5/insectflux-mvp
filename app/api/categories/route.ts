import { NextResponse } from 'next/server';
import { getCategories } from '@/lib/DB/db-category'; // Replace with your actual data fetching function

export async function GET() {
  const categories = await getCategories();
  console.log('categories GET:', categories);
  return NextResponse.json(categories);
}
