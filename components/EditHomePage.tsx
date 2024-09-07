'use client';

import { useState } from 'react';
import { HomeContent } from '@/lib/db-home';
import Link from 'next/link';
import { CloudArrowDownIcon } from '@heroicons/react/24/solid';

export default function EditHomePage({
  initialHomeContent
}: {
  initialHomeContent: HomeContent;
}) {
  const [homeContent, setHomeContent] = useState<HomeContent>({
    ...initialHomeContent
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setHomeContent((prev: HomeContent) => ({ ...prev, [name]: value }));
    console.log('homeContent = ', homeContent);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // const content: HomeContent = {
    //   overview: 'Overview text',
    //   featured_products: ['Product 1', 'Product 2'],
    //   featured_companies: ['Company 1', 'Company 2'],
    //   promotions: ['Promotion 1', 'Promotion 2'],
    //   success_stories: ['Success story 1', 'Success story 2']
    // };

    // const res = await fetch('/api/content', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify(content)
    // });
    // const data = await res.json();
    // alert(data.message || 'Failed to update content');
  };

  return (
    <div>
      <h1>Edit Content</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="overview">Overview</label>
          <textarea
            id="overview"
            name="overview"
            // value={homeContent.overview}
            value={homeContent.overview ?? ''}
            onChange={handleChange}
          />
        </div>
        {/* Repeat similar blocks for featured_products, featured_companies, promotions, and success_stories */}
        <div>
          <label htmlFor="overview">Featured Product</label>
          <textarea
            id="featured_products"
            name="featured_products"
            value={homeContent.featuredProducts ?? ''}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="overview">Featured Companies</label>
          <textarea
            id="featured_products"
            name="featured_companies"
            value={homeContent.featuredCompanies ?? ''}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="overview">Promotions</label>
          <textarea
            id="promotions"
            name="promotions"
            value={homeContent.promotions ?? ''}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="overview">Success Stories</label>
          <textarea
            id="success_stories"
            name="success_stories"
            value={homeContent.successStories ?? ''}
            onChange={handleChange}
          />
        </div>
        <button type="submit">buttonUpdate Content</button>
      </form>

      <Link href="/edit" passHref>
        <div className="mt-8 flex items-center text-blue-600 cursor-pointer">
          <CloudArrowDownIcon className="h-6 w-6 mr-2" />
          Get Content
        </div>
      </Link>
    </div>
  );
}

//   return (
//     <div>
//       <h1>Edit Home Content</h1>
//       <form>
//         <textarea
//           id="overview"
//           name="overview"
//           value={content.overview ?? ''}
//           onChange={handleChange}
//         />
//         {/* Other form fields and logic */}
//       </form>
//     </div>
//   );
// }
