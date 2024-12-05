import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const eliceNeolli = localFont({
  src: [
    {
      path: "./fonts/EliceDXNeolliOTF-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/EliceDXNeolliOTF-Light.otf",
      weight: "200",
      style: "normal",
    },
    {
      path: "./fonts/EliceDXNeolliOTF-Medium.otf",
      weight: "400",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Mini Elice",
    default: "Mini Elice",
  },
  description: "엘리스의 축소판입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${eliceNeolli.className} antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
