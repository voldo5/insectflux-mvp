import { getHomeContent } from '@/lib/db-home';
import EditHomePage from '@/components/EditHomePage';
export default async function Page() {
  const { homeContent } = await getHomeContent();

  return <EditHomePage initialHomeContent={homeContent} />;
}

// import { useState } from 'react';
// import Link from 'next/link';
// //import { PencilIcon } from '@heroicons/react/24/solid';
//import { CloudArrowDownIcon } from '@heroicons/react/24/solid';
// import { getHomeContent, upsertHomeContent } from '@/lib/db-home';
// import { HomeContent } from '@/lib/db-home';

// // interface HomeContent {
// //   overview: string;
// //   featured_products: any[];
// //   featured_companies: any[];
// //   promotions: any[];
// //   success_stories: any[];
// // }

// export async function getServerSideProps() {
//   const { homeContent } = await getHomeContent(); // Fetch data again

//   return {
//     props: { homeContent }
//   };
// }

// //   export default function EditHomePage({ homeContent }) {
// //     return (
// //       <div>
// //         {/* Render your edit form here with homeContent */}
// //       </div>
// //     );
// //   }

// export default async function EditHomePage() {
//   // export default function EditHomePage({
//   //   homeContent
//   // }: {
//   //   homeContent: HomeContent;
//   // }) {

//   //   const [content, setContent] = useState<HomeContent>({
//   //     overview: '',
//   //     featured_products: [],
//   //     featured_companies: [],
//   //     promotions: [],
//   //     success_stories: []
//   //   });

//   const { homeContent } = await getHomeContent(); // Fetch data here
//   const [content, setContent] = useState<HomeContent>({ ...homeContent });

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     const { name, value } = e.target;
//     setContent((prev) => ({ ...prev, [name]: value }));
//     console.log('content = ', content);
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     // const content: HomeContent = {
//     //   overview: 'Overview text',
//     //   featured_products: ['Product 1', 'Product 2'],
//     //   featured_companies: ['Company 1', 'Company 2'],
//     //   promotions: ['Promotion 1', 'Promotion 2'],
//     //   success_stories: ['Success story 1', 'Success story 2']
//     // };

//     // const res = await fetch('/api/content', {
//     //   method: 'POST',
//     //   headers: {
//     //     'Content-Type': 'application/json'
//     //   },
//     //   body: JSON.stringify(content)
//     // });
//     // const data = await res.json();
//     // alert(data.message || 'Failed to update content');
//   };

//   return (
//     <div>
//       <h1>Edit Content</h1>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="overview">Overview</label>
//           <textarea
//             id="overview"
//             name="overview"
//             // value={homeContent.overview}
//             value={homeContent.overview ?? ''}
//             onChange={handleChange}
//           />
//         </div>
//         {/* Repeat similar blocks for featured_products, featured_companies, promotions, and success_stories */}
//         <div>
//           <label htmlFor="overview">Featured Product</label>
//           <textarea
//             id="featured_products"
//             name="featured_products"
//             value={homeContent.featuredProducts ?? ''}
//             onChange={handleChange}
//           />
//         </div>
//         <div>
//           <label htmlFor="overview">Featured Companies</label>
//           <textarea
//             id="featured_products"
//             name="featured_companies"
//             value={content.featuredCompanies ?? ''}
//             onChange={handleChange}
//           />
//         </div>
//         <div>
//           <label htmlFor="overview">Promotions</label>
//           <textarea
//             id="promotions"
//             name="promotions"
//             value={content.promotions ?? ''}
//             onChange={handleChange}
//           />
//         </div>
//         <div>
//           <label htmlFor="overview">Success Stories</label>
//           <textarea
//             id="success_stories"
//             name="success_stories"
//             value={content.successStories ?? ''}
//             onChange={handleChange}
//           />
//         </div>
//         <button type="submit">buttonUpdate Content</button>
//       </form>

//       <Link href="/edit" passHref>
//         <div className="mt-8 flex items-center text-blue-600 cursor-pointer">
//           <CloudArrowDownIcon className="h-6 w-6 mr-2" />
//           Get Content
//         </div>
//       </Link>
//     </div>
//   );
// }
