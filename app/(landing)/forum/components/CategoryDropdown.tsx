import { useState } from 'react';
import { Dropdown, Menu } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { CategoryContent } from '@/lib/DB/db-category';
// import { getCategories } from '@/lib/DB/db-category';

// const categories  = await getCategories();
type Category = {
  id: number;
  name: string;
  description: string | null;
};

type CategoryDropdownProps = {
  categories: Category[]; // Adjust the type according to your data
};
// type CategoryDropdownProps = {
//   categories: Array<{ id: number; name: string; description: string | null }>; // Adjust the type according to your data
// };

//const CategoryDropdown = (categories: CategoryDropdownProps) => {
const CategoryDropdown: React.FC<CategoryDropdownProps> = ({ categories }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleMenuClick = (e: any) => {
    console.log('Menu item clicked:', e);
    setIsVisible(false);
  };

  console.log('CategoryDropdownProps categories:', categories);

  const categoryItemsDefault = [
    { key: '1', label: 'Category 1', onClick: handleMenuClick },
    { key: '2', label: 'Category 2', onClick: handleMenuClick },
    { key: '3', label: 'Category 3', onClick: handleMenuClick }
  ];

  if (!categories) {
    console.log('CategoryDropdownProps categories is empty');
    return (
      <Dropdown
        menu={{ items: categoryItemsDefault }}
        trigger={['click']}
        onOpenChange={(flag) => setIsVisible(flag)}
        open={isVisible}
      >
        <a onClick={(e) => e.preventDefault()} className="text-white">
          Categories <DownOutlined />
        </a>
      </Dropdown>
    );
  }

  const categoryItems = categories.map((category) => ({
    key: category.id.toString(),
    label: category.name,
    onClick: handleMenuClick
  }));

  console.log('CategoryDropdownProps categoryItems:', categoryItems);

  return (
    <Dropdown
      menu={{ items: categoryItems }}
      //menu={{ items: categoryItemsDefault }}
      trigger={['click']}
      onOpenChange={(flag) => setIsVisible(flag)}
      open={isVisible}
    >
      <a onClick={(e) => e.preventDefault()} className="text-white">
        Categories <DownOutlined />
      </a>
    </Dropdown>
  );
};

export default CategoryDropdown;
