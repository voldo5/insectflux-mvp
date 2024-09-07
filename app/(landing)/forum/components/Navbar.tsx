import { Menu } from 'antd';
import Link from 'next/link';
import {
  HomeOutlined,
  AppstoreOutlined,
  UserOutlined,
  SearchOutlined,
  BellOutlined,
  MessageOutlined
} from '@ant-design/icons';
import CategoryDropdown from './CategoryDropdown';

type Category = {
  id: number;
  name: string;
  description: string | null;
};

type CategoryDropdownProps = {
  categories: Category[]; // Adjust the type according to your data
};

//const Navbar = () => {
const Navbar: React.FC<CategoryDropdownProps> = ({ categories }) => {
  return (
    <Menu theme="dark" mode="horizontal" className="bg-gray-800 text-white">
      <Menu.Item key="home" icon={<HomeOutlined />}>
        <Link href="/">Home</Link>
      </Menu.Item>
      <Menu.Item key="categories" icon={<AppstoreOutlined />}>
        <CategoryDropdown categories={categories} />
      </Menu.Item>
      <Menu.Item key="messages" icon={<MessageOutlined />}>
        <Link href="/messages">Messages</Link>
      </Menu.Item>
      <Menu.Item key="notifications" icon={<BellOutlined />}>
        <Link href="/notifications">Notifications</Link>
      </Menu.Item>
      <Menu.Item key="search" icon={<SearchOutlined />}>
        <Link href="/search">Search</Link>
      </Menu.Item>
      <Menu.Item key="profile" icon={<UserOutlined />}>
        <Link href="/profile">Profile</Link>
      </Menu.Item>
    </Menu>
  );
};

export default Navbar;
