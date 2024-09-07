// components/AntdIcons.tsx
'use client';

import dynamic from 'next/dynamic';
// antd icons are not SSR compatible, because they used useEffect hook
// so we need to import them dynamically
//Dynamic imports with next/dynamic are a tool for handling client-side
// components in Next.js, especially when dealing with libraries
// that rely on browser APIs or hooks that don’t work in a server-side context.

// Dynamically import Ant Design icons
const HomeOutlined = dynamic(
  () => import('@ant-design/icons').then((mod) => mod.HomeOutlined),
  { ssr: false }
);
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

const FileOutlined = dynamic(
  () => import('@ant-design/icons').then((mod) => mod.FileOutlined),
  { ssr: false }
);
const PlusCircleOutlined = dynamic(
  () => import('@ant-design/icons').then((mod) => mod.PlusCircleOutlined),
  { ssr: false }
);

const Layout = dynamic(() => import('antd').then((mod) => mod.Layout), {
  ssr: false
});
const Menu = dynamic(() => import('antd').then((mod) => mod.Menu), {
  ssr: false
});
const Dropdown = dynamic(() => import('antd').then((mod) => mod.Dropdown), {
  ssr: false
});
const Avatar = dynamic(() => import('antd').then((mod) => mod.Avatar), {
  ssr: false
});
const Input = dynamic(() => import('antd').then((mod) => mod.Input), {
  ssr: false
});
//const { Layout, Menu, Dropdown, Avatar, Input } = dynamic(() => import('antd'), { ssr: false });

export {
  // icons
  HomeOutlined,
  AppstoreOutlined,
  UserOutlined,
  SearchOutlined,
  BellOutlined,
  MessageOutlined,
  FileOutlined,
  PlusCircleOutlined,
  // components
  Layout,
  Menu,
  Dropdown,
  Avatar,
  Input
};
