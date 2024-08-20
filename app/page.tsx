"use client";

import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { lusitana } from '@/app/ui/fonts';

export default function Page() {

  var resultsVar = "none";


  async function handleOnClick() {
    const results = await fetch('/api/scraper', {
      method: 'POST',
      body: JSON.stringify({})
    }).then(r => r.json())
    console.log(results)
     resultsVar = results;
  }


  return (
    <main className="flex min-h-screen flex-col p-6">
         
          {resultsVar}
   
         
        <button onClick={handleOnClick}>click me</button>
  
    </main>
  );
}


