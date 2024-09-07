'use client';
//'use server';

import React, { useEffect, useState } from 'react';
import { Layout, Spin } from 'antd';
import Navbar from './components/Navbar';
import CategoryDropdown from './components/CategoryDropdown';
import { usePathname, useRouter } from 'next/navigation';
import { getCategories, CategoryContent } from '@/lib/DB/db-category';

const { Header, Content, Footer } = Layout;

type Category = {
  id: number;
  name: string;
  description: string | null;
};

// interface Categories {
//   id: number;
//   name: string;
//   description?: string;
// } [];

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  // async function MainLayout ({ children }: { children: React.ReactNode }) {
  // const MainLayout = async ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const pathname = usePathname();
  const [categories, setCategories] = useState<Category[]>([]);
  //const [loading, setLoading] = useState(true);

  // const categoryItemsDefault = [
  //   { key: '1', label: 'Category 1', onClick: handleMenuClick },
  //   { key: '2', label: 'Category 2', onClick: handleMenuClick },
  //   { key: '3', label: 'Category 3', onClick: handleMenuClick }
  // ];

  //const nMounted = React.useRef(0);

  useEffect(() => {
    //console.log('*****useEffect ', nMounted.current++);
    fetch('/api/categories')
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
        console.log('data:', data);
        //setLoading(false);
      });
  }, []);

  // useEffect(() => {
  //   const fetchCategories = async () => {
  //     try {
  //       const response = await fetch('/api/categories');
  //       if (response.ok) {
  //         const data = await response.json();
  //         setCategories(data);
  //         console.log('data:', data);
  //       } else {
  //         console.error('Failed to fetch categories');
  //       }
  //     } catch (error) {
  //       console.error('Error fetching categories', error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchCategories();
  // }, []);

  return (
    <Layout>
      <Header className="bg-gray-800">
        <div className="flex items-center justify-between px-2">
          <div
            className="text-white text-xl cursor-pointer mr-4"
            onClick={() => router.push('/')}
          >
            Insectlux Forum
          </div>
          {/* <div className="flex-grow"> */}
          <div className="flex items-center space-x-4">
            {' '}
            {/* Allows Navbar to take more space */}
            <Navbar categories={categories} />
          </div>
        </div>
      </Header>
      <Content className="p-4 bg-white min-h-screen">
        {/* <div className="container mx-auto">
          <CategoryDropdown categories={categories} />
          {children}
        </div> */}

        <div className="container mx-auto">
          {/* {loading ? ( */}
          {categories.length === 0 ? (
            <Spin />
          ) : (
            // <div>Loading...</div> // You can replace this with a loading spinner
            // <CategoryDropdown categories={categories} />
            <div></div>
          )}
          {children}
        </div>
      </Content>
      <Footer className="bg-gray-800 text-white text-center">
        © {new Date().getFullYear()} Insectflux Forum. All rights reserved.
      </Footer>
    </Layout>
  );
};

export default MainLayout;
