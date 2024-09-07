import './globals.css';
import { AntdRegistry } from '@ant-design/nextjs-registry';

import { Analytics } from '@vercel/analytics/react';

export const metadata = {
  title: 'Next.js App Router + NextAuth + Tailwind CSS',
  description:
    'A user admin dashboard configured with Next.js, Postgres, NextAuth, Tailwind CSS, TypeScript, and Prettier.'
};
// This is the AntdRegistry component that will render the Ant Design CSS
// to avoid flickering (see https://ant.design/docs/react/use-in-typescript)
// But this give warning that will be fixed in the next version of React 19 (after June 2024)
export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* <body className="flex min-h-screen w-full flex-col">{children}</body> */}
      <body className="flex min-h-screen w-full flex-col">
        <AntdRegistry>{children}</AntdRegistry>
      </body>
      <Analytics />
    </html>
  );
}
