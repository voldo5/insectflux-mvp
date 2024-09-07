'use client';

import { FileOutlined, PlusCircleOutlined } from '@ant-design/icons';
import { ComponentType } from 'react';

// Dynamic import for a specific Ant Design icon
// const getIcon = (iconName: string) => {
//     return dynamic(() => import('@ant-design/icons').then(mod => mod[iconName as keyof typeof mod]), { ssr: false });
//   };

const iconMap: Record<string, ComponentType> = {
  FileOutlined,
  PlusCircleOutlined
  // Add more icons here as needed
};

const getIcon = (iconName: string) => {
  const IconComponent = iconMap[iconName];
  if (!IconComponent) {
    throw new Error(`Icon "${iconName}" does not exist in the icon map.`);
  }
  return IconComponent;
};

const IconComponent: React.FC<{ iconName: string }> = ({ iconName }) => {
  const Icon = getIcon(iconName);
  return <Icon />;
};

export default IconComponent;

// iconMap: This object explicitly maps icon names (as strings) to their respective React components.
// This way, TypeScript knows exactly what components are available and can enforce type safety.
//getIcon: This function retrieves the correct icon component based on the iconName. If an invalid name is passed, it throws an error.
//Usage: In the IconComponent, you can now pass the name of the icon as a string, and it will render the corresponding Ant Design icon.
