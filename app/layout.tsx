import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import Script from "next/script";
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
       <body className={`${inter.className} antialiased`}>{children}</body>
    
    <Script src="/script.js" strategy="lazyOnload" />

    </html>
  );
}