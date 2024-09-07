'use client';

import React from 'react';
import { Card } from 'antd';

interface CategoryProps {
  title: string;
  description?: string;
  icon?: React.ReactNode; // Optional icon
  onClick?: () => void; // Optional click handler
}

const Category: React.FC<CategoryProps> = ({
  title,
  description,
  icon,
  onClick
}) => {
  return (
    <Card
      className="flex items-center p-4 cursor-pointer hover:bg-gray-100 transition-all"
      onClick={onClick}
    >
      {icon && <div className="mr-4 text-2xl">{icon}</div>}
      <div>
        <h2 className="text-lg font-semibold">{title}</h2>
        {description && <p className="text-sm text-gray-500">{description}</p>}
      </div>
    </Card>
  );
};

export default Category;
