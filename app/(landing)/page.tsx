'use client';
// app/landing/page.tsx

import Head from 'next/head';

export default function Landing() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <Head>
        <title>Landing Page</title>
        <meta
          name="description"
          content="Welcome to our waste marketplace landing page"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center flex-1 text-center">
        <h1 className="text-4xl font-bold">
          Welcome to Insectflux Marketplace!
        </h1>
        <p className="mt-4 text-xl">
          Your journey to sustainable waste management starts here.
        </p>
        <button className="mt-8 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Get Started
        </button>
      </main>
    </div>
  );
}
