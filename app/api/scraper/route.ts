import { teardownTraceSubscriber } from 'next/dist/build/swc';
import puppeteer from 'puppeteer';
// Or import puppeteer from 'puppeteer-core';




export async function POST(request: Request) {

  
    console.log("hely")

     
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        

        await page.goto('https://developer.chrome.com/');
        
        
        await page.setViewport({width: 1080, height: 1024});
        
    
        await page.locator('.devsite-search-field').fill('automate beyond recorder');
        
    
        await page.locator('.devsite-result-item-link').click();
        
    
        const textSelector = await page
        .locator('text/Customize and automate')
        .waitHandle();
        const fullTitle = await textSelector?.evaluate(el => el.textContent);
        

        console.log('The title of this blog post is "%s".', fullTitle);
        
        await browser.close();
    
    return Response.json({
        test: true 
        
    })

}