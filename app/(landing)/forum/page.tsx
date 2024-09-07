'use server';
//'use client';

// import dynamic from 'next/dynamic';

// const File = dynamic(
//   () => import('@ant-design/icons').then((mod) => mod.FileOutlined),
//   { ssr: false }
// );
// const PlusCircle = dynamic(
//   () => import('@ant-design/icons').then((mod) => mod.PlusCircleOutlined),
//   { ssr: false }
// );

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
//import { FileOutlined, PlusCircleOutlined } from '@ant-design/icons';
import IconComponent from '@/components/IconComponent';

import { File, PlusCircle } from 'lucide-react';
//import { FileOutlined, PlusCircleOutlined } from '@ant-design/icons';
import { Button } from '@/components/ui/button';
import { ProductsTable } from '../products/products-table';
import { getProducts } from '@/lib/db';
import { getCategories } from '@/lib/DB/db-category';
//
export default async function ProductsPageTest({
  searchParams
}: {
  searchParams: { q: string; offset: string };
}) {
  const categories = await getCategories();

  const search = searchParams.q ?? '';
  const offset = searchParams.offset ?? 0;
  const { products, newOffset, totalProducts } = await getProducts(
    search,
    Number(offset)
  );

  return (
    <Tabs defaultValue="all">
      <div className="flex items-center">
        <TabsList>
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="active">Active</TabsTrigger>
          <TabsTrigger value="draft">Draft</TabsTrigger>
          <TabsTrigger value="archived" className="hidden sm:flex">
            Archived
          </TabsTrigger>
        </TabsList>
        <div className="ml-auto flex items-center gap-2">
          <Button size="sm" variant="outline" className="h-8 gap-1">
            {/* <File className="h-3.5 w-3.5" /> */}
            <IconComponent iconName="FileOutlined" />
            <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
              Export
            </span>
          </Button>
          <Button size="sm" className="h-8 gap-1">
            {/* <PlusCircle className="h-3.5 w-3.5" /> */}
            <IconComponent iconName="PlusCircleOutlined" />
            <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
              Add Product
            </span>
          </Button>
        </div>
      </div>
      <TabsContent value="all">
        <ProductsTable
          products={products}
          offset={newOffset ?? 0}
          totalProducts={totalProducts}
        />
      </TabsContent>
    </Tabs>
  );
}
