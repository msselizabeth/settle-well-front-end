import { Bona_Nova, Geist, Geist_Mono, Reddit_Sans } from "next/font/google";
import "./globals.scss";
import Header from "@/components/Header/Header";

const bonaNova = Bona_Nova({
  variable: "--font-bona-nova",
  subset: ["latin"],
})

const redditSans = Reddit_Sans({
  variable: "--font-reddit-sans",
  subset: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header/>
        {children}
      </body>
    </html>
  );
}
