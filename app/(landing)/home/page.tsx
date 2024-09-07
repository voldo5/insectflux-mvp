// 'use client';

//import { useState } from 'react';
import Link from 'next/link';
//import { PencilIcon } from '@heroicons/react/24/solid';
import { PlusCircle } from 'lucide-react';
//import { CloudArrowDownIcon } from '@heroicons/react/24/solid';
import { getHomeContent, upsertHomeContent } from '@/lib/db-home';
//import { EditOutlined, DownloadOutlined } from '@ant-design/icons';
import IconComponent from '@/components/IconComponent';

// import dynamic from 'next/dynamic';

// const EditOutlined = dynamic(
//   () => import('@ant-design/icons').then((mod) => mod.EditOutlined),
//   { ssr: false }
// );

const products = [
  {
    id: 1,
    imageUrl: '/images/products/product1_Fertilizer.png',
    name: 'Organic Fertilizer',
    price: '19.99'
  },
  {
    id: 2,
    imageUrl: '/images/products/product2_Compost_Bin.png',
    name: 'Compost Bin',
    price: '29.99'
  },
  {
    id: 3,
    imageUrl: 'https://picsum.photos/800/600?blur=2',
    name: 'Recycled Plant Pots',
    price: '14.99'
  },
  {
    id: 4,
    imageUrl: 'https://picsum.photos/800/600?blur=2',
    name: 'Eco-Friendly Cleaning Kit',
    price: '24.99'
  }
];

const companies = [
  {
    id: 1,
    logoUrl: '/images/companies/company1_Green_Earth.png',
    name: 'GreenEarth Supplies',
    description: 'Leading provider of sustainable agricultural products.'
  },
  {
    id: 2,
    logoUrl: '/images/companies/company2_Eco_Innovation.png',
    name: 'Eco Innovations Ltd.',
    description: 'Innovative solutions for a greener future.'
  },
  {
    id: 3,
    logoUrl: 'https://picsum.photos/800/600?blur=2',
    name: 'NatureWorks Co.',
    description: 'Biodegradable products for everyday use.'
  },
  {
    id: 4,
    logoUrl: 'https://picsum.photos/800/600?blur=2',
    name: 'EcoTech Industries',
    description: 'Pioneering eco-friendly technology.'
  }
];

const stories = [
  {
    id: 1,
    imageUrl: '/images/stories/story1_To_Wealth.png',
    title: 'Transforming Waste into Wealth',
    excerpt:
      'Learn how a small community turned organic waste into profitable products...'
  },
  {
    id: 2,
    imageUrl: '/images/stories/story2_Agriculture_Revolution.png',
    title: 'A Sustainable Farming Revolution',
    excerpt:
      'Discover how sustainable practices led to a 30% increase in crop yield...'
  },
  {
    id: 3,
    imageUrl: 'https://picsum.photos/800/600?blur=2',
    title: 'Building a Greener Tomorrow',
    excerpt:
      'How one company’s innovation is changing the way we think about waste...'
  },
  {
    id: 4,
    imageUrl: 'https://picsum.photos/800/600?blur=2',
    title: 'From Trash to Treasure',
    excerpt:
      'See how discarded materials are being transformed into valuable products...'
  }
];

{
  /* <section className="py-16 bg-gray-100">
  <div className="container mx-auto">
    <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
      Featured Products
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-white shadow-md rounded-lg overflow-hidden"
        >
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-gray-600">${product.price}</p>
            <button className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-full">
              View Details
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>; */
}

export default async function Home() {
  const { homeContent } = await getHomeContent();

  // await upsertHomeContent(1, {
  //   overview: 'New overview content',
  //   promotions: 'New promotions content'
  //   // other fields are optional
  // });

  //const content = await getContent();

  //   <div className="flex flex-col items-center justify-center min-h-screen p-4">
  //   <section
  //     className="relative bg-cover bg-center h-[500px] w-full text-red"
  //     style={{ backgroundImage: 'url("/Images/banner.png")' }}
  //   >
  //     <div className="absolute inset-0 flex items-center justify-center">
  //       <h1 className="text-white text-4xl">Welcome to Our Site</h1>
  //     </div>
  //   </section>
  // </div>

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <section
        className="relative bg-cover bg-center h-[500px] w-full"
        style={{ backgroundImage: 'url("/images/banner.png")' }}
      >
        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center">
          <h1 className="text-4xl md:text-6xl font-bold text-bannerForeground">
            {/* #c0bda5 */}
            Welcome to Our Marketplace
          </h1>
          <p className="mt-4 text-lg md:text-xl font-bold text-bannerForeground">
            Discover the best products and companies.
          </p>
          <button className="mt-6 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-full">
            Get Started
          </button>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            Featured Products
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white shadow-md rounded-lg overflow-hidden"
              >
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{product.name}</h3>
                  <p className="text-gray-600">${product.price}</p>
                  <button className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-full">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            Featured Companies
          </h2>
          <div className="flex overflow-x-scroll space-x-6">
            {companies.map((company) => (
              <div
                key={company.id}
                className="flex-shrink-0 w-64 bg-gray-100 rounded-lg p-4"
              >
                <img
                  src={company.logoUrl}
                  alt={company.name}
                  className="h-24 mx-auto"
                />
                <h3 className="text-lg font-semibold text-center mt-4">
                  {company.name}
                </h3>
                <p className="text-gray-600 text-center">
                  {company.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-indigo-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Special Promotions</h2>
          <p className="mt-4 text-lg">Don't miss our limited-time offers.</p>
          <button className="mt-6 px-6 py-3 bg-white text-indigo-600 rounded-full">
            Shop Now
          </button>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            Success Stories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stories.map((story) => (
              <div
                key={story.id}
                className="bg-white shadow-md rounded-lg overflow-hidden"
              >
                <img
                  src={story.imageUrl}
                  alt={story.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{story.title}</h3>
                  <p className="text-gray-600">{story.excerpt}</p>
                  <button className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-full">
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="flex flex-col items-center justify-center min-h-screen p-4">
        <h1 className="text-4xl font-bold">
          Welcome to the Insectflux Marketplace
        </h1>
        <p className="mt-4 text-xl">
          Connecting buyers and sellers of organic waste for a sustainable
          future.
        </p>

        <div className="mt-8 text-left">
          <ul className="list-disc list-inside text-xl space-y-2">
            <li>Overview1</li>
            <li>Featured Products</li>
            <li>Featured Companies</li>
            <li>Promotions</li>
            <li>Success Stories</li>
          </ul>
        </div>

        <Link href="/home/edit" passHref>
          <div className="mt-8 flex items-center text-blue-600 cursor-pointer">
            {/* <PencilIcon className="h-6 w-6 mr-2" /> */}
            {/* <PlusCircle className="h-6 w-6 mr-2" /> */}
            <IconComponent iconName="FileOutlined" />
            Edit Content
          </div>
        </Link>

        <div className="mt-8">
          <h1 className="text-3xl font-bold"> Current Content</h1>
          {homeContent && (
            <div className="mt-4">
              <h2 className="text-2xl font-bold">Content Overview:</h2>
              <p>{homeContent.overview}</p>
              <h3 className="text-2xl font-bold">Featured Products:</h3>
              <p>{homeContent.featuredProducts}</p>
              <h3 className="text-2xl font-bold">Featured Companies:</h3>
              <p>{homeContent.featuredCompanies}</p>
              <h3 className="text-2xl font-bold">Promotions:</h3>
              <p>{homeContent.promotions}</p>
              <h3 className="text-2xl font-bold">Success Stories:</h3>
              <p>{homeContent.successStories}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

//export default Home;
