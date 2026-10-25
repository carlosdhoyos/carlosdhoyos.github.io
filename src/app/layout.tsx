import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { profile } from "@/content/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${profile.name} · Universidad Nacional de Colombia`,
  description: profile.tagline.en,
  openGraph: {
    title: profile.name,
    description: profile.tagline.en,
    url: "https://carlosdhoyos.github.io/",
    type: "website",
  },
};

// Runs before first paint: restore saved theme/language, else follow the browser.
const boot = `(function(){var d=document.documentElement,s;
try{s=localStorage.getItem('theme')}catch(e){}
d.dataset.theme=s||(matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');
try{s=localStorage.getItem('lang')}catch(e){s=null}
s=s||((navigator.language||'').toLowerCase().indexOf('es')===0?'es':'en');
d.dataset.lang=s;d.lang=s;})()`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-theme="light"
      data-lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: boot }} />
      </head>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
