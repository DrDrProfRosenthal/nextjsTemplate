"use client";


import { useEffect, useState } from 'react';

export default function Page() {

  var resultsVar = "none";


  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/scraper');
        const data = await response.json();
        setMessage(data.message);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);




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
   
          <div>
      <h1>Welcome to My Next.js App</h1>
      <p>{message ? message : "Loading..."}</p>
    </div>
    
        <button onClick={handleOnClick}>click me</button>
  
    </main>
  );
}


