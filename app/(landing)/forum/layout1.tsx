'use client';
//todo delete this file
import dynamic from 'next/dynamic';
import React from 'react';
import Link from 'next/link';
import type { ReactNode } from 'react';
//import { HomeOutlined } from '@ant-design/icons';
//import { Menu, Dropdown } from 'antd';
//import { AppstoreOutlined, DownOutlined } from '@ant-design/icons';
//import Link from 'next/link';
import Category from './components/Category'; // Import your Category component
import {
  HomeOutlined,
  //AppstoreOutlined,
  DownOutlined,
  FileOutlined,
  PlusCircleOutlined
  // UserOutlined,
  // SearchOutlined,
  // BellOutlined,
  // MessageOutlined
} from '@ant-design/icons';
import { Menu, Avatar, Input, Dropdown } from 'antd';
import { Layout } from 'antd';
const { Header, Sider, Content, Footer } = Layout;

// Dynamically import Ant Design components
// const Layout = dynamic(() => import('antd').then((mod) => mod.Layout), {
//   ssr: false
// });
// const Header = dynamic(() => import('antd').then((mod) => mod.Layout.Header), {
//   ssr: false
// });
// const Sider = dynamic(() => import('antd').then((mod) => mod.Layout.Sider), {
//   ssr: false
// });
// const Content = dynamic(
//   () => import('antd').then((mod) => mod.Layout.Content),
//   { ssr: false }
// );
// const Footer = dynamic(() => import('antd').then((mod) => mod.Layout.Footer), {
//   ssr: false
// });

// const Menu = dynamic(() => import('antd').then((mod) => mod.Menu), {
//   ssr: false
// });
// const MenuItem = dynamic(() => import('antd').then((mod) => mod.Menu.Item), {
//   ssr: false
// });
// const Avatar = dynamic(() => import('antd').then((mod) => mod.Avatar), {
//   ssr: false
// });
// const Input = dynamic(() => import('antd').then((mod) => mod.Input), {
//   ssr: false
// });
// const Dropdown = dynamic(() => import('antd').then((mod) => mod.Dropdown), {
//   ssr: false
// });

// Dynamically import icons
// const HomeOutlined = dynamic(
//   () => import('@ant-design/icons').then((mod) => mod.HomeOutlined),
//   { ssr: false }
// );
const AppstoreOutlined = dynamic(
  () => import('@ant-design/icons').then((mod) => mod.AppstoreOutlined),
  { ssr: false }
);
const UserOutlined = dynamic(
  () => import('@ant-design/icons').then((mod) => mod.UserOutlined),
  { ssr: false }
);
const SearchOutlined = dynamic(
  () => import('@ant-design/icons').then((mod) => mod.SearchOutlined),
  { ssr: false }
);
const BellOutlined = dynamic(
  () => import('@ant-design/icons').then((mod) => mod.BellOutlined),
  { ssr: false }
);
const MessageOutlined = dynamic(
  () => import('@ant-design/icons').then((mod) => mod.MessageOutlined),
  { ssr: false }
);

const categories = [
  {
    title: 'Documents',
    description: 'Manage your files and folders',
    icon: <FileOutlined />
  },
  {
    title: 'Media',
    description: 'Photos, videos, and more',
    icon: <PlusCircleOutlined />
  },
  { title: 'Settings', description: 'Customize your experience' }
];

const categoryMenu = (
  <Menu>
    {categories.map((category, index) => (
      <Menu.Item key={index}>
        <Category
          title={category.title}
          description={category.description}
          icon={category.icon}
          onClick={() => console.log(`Category ${category.title} clicked`)}
        />
      </Menu.Item>
    ))}
  </Menu>
);

const MainLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  const userMenu = (
    <Menu>
      <Menu.Item key="1">Profile</Menu.Item>
      <Menu.Item key="2">Settings</Menu.Item>
      <Menu.Item key="3">Logout</Menu.Item>
    </Menu>
  );

  return (
    <Layout className="min-h-screen">
      <Header className="bg-blue-900 px-4 flex justify-between items-center">
        <div className="text-white text-2xl font-bold">
          <Link href="/">Your Forum</Link>
        </div>
        <div className="flex items-center">
          <Input
            prefix={<SearchOutlined className="text-gray-400" />}
            placeholder="Search..."
            className="w-64 mr-4"
          />
          <Dropdown overlay={userMenu} placement="bottomRight">
            <Avatar size="large" icon={<UserOutlined />} className="ml-4" />
          </Dropdown>
        </div>
      </Header>

      <Layout>
        <Layout className="p-6 bg-gray-100">
          <Content className="p-6 bg-white shadow rounded-lg">
            {children}
          </Content>
          <Footer className="text-center mt-6 text-gray-500">
            ©2024 Your Forum. All Rights Reserved. |{' '}
            <Link href="/privacy">Privacy Policy</Link> |{' '}
            <Link href="/contact">Contact</Link>
          </Footer>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default MainLayout;

/*<Sider width={250} className="bg-white shadow-md">
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            className="h-full border-r-0"
          >
            <Menu.Item key="1" icon={<HomeOutlined />}>
              <Link href="/">Home</Link>
            </Menu.Item> 
            <Dropdown overlay={categoryMenu} trigger={['click']}>
              <Menu.Item key="2" icon={<AppstoreOutlined />}>
                Categories <DownOutlined className="ml-2" />
              </Menu.Item>
            </Dropdown>
            <Menu.Item key="3" icon={<MessageOutlined />}>
              <Link href="/threads">My Threads</Link>
            </Menu.Item>
            <Menu.Item key="4" icon={<BellOutlined />}>
              <Link href="/notifications">Notifications</Link>
            </Menu.Item>
          </Menu>
        </Sider> */
