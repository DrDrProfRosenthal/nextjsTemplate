"use server";

import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Fetch data from the external API
    const response = await fetch('https://linguee-api.fly.dev/api/v2/external_sources?query=wary&src=en&dst=en&guess_direction=true&follow_corrections=on_empty_translations');

    // Check if the response is OK (status 200-299)
    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.statusText}`);
    }

    // Parse the response as JSON
    const data = await response.json();

    // Return the fetched data as JSON
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching data:', error);

    // Return an error response if the fetch fails
    return NextResponse.json(
      { error: 'Failed to fetch data' },
      { status: 500 }
    );
  }
}
