import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Cursor from "../components/Cursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Ram Prakhyath Annamareddy",
  description: "Ram Prakhyath Annamareddy's Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased portfolio`}
      >
        <Navbar />
        <main className="pt-32">
          {children}
        </main>
        <Cursor /> 
      </body>
    </html>
  );
}
