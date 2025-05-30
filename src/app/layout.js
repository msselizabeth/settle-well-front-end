import { Bona_Nova, Reddit_Sans } from "next/font/google";
import "./globals.scss";
import Header from "@/components/Header/Header";
import SideBar from "@/components/SideBar/SideBar";

const bonaNova = Bona_Nova({
  variable: "--font-bona-nova",
  subset: ["latin"],
  weight: ["400", "700" ]
})

const redditSans = Reddit_Sans({
  variable: "--font-reddit-sans",
  subset: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900" ]
})


export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${bonaNova.variable} ${redditSans.variable}`}>
        <Header/>
        <SideBar />
        {children}
      </body>
    </html>
  );
}
