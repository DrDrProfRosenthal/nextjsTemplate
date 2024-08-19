"use client";

import getDownloads from '@/app/api/webScraper/webScraper'
import { type NextPage } from 'next'
import Head from 'next/head'




const Home: NextPage = () => {

  const getDownloads = () => {
   fetch('http://localhost:3000/api/webScraper')
   
  };

  return (
    <div>
      <Head>
        <title>Web Scraper</title>
      </Head>
      <button onClick={getDownloads} type='button'>Webscrape!</button>
    </div>
  );
};

export default Home;

/*
export default async function Page() { 

  return {
   

  }
}*/