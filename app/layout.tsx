import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { MenuProvider } from "@/components/Nav/MenuContext";
import { Navbar } from "@/components/Nav/Bar";
import { Footer } from "@/components/Footer";

const gelion = localFont({
  src: [
    {
      path: "../public/fonts/Gelion-Black.ttf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../public/fonts/Gelion-SemiBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../public/fonts/Gelion-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/Gelion-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/Gelion-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-gelion",
  display: "swap",
});

const humanist = localFont({
  src: [
    {
      path: "../public/fonts/Humanist-521-Regular.otf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-humanist",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Funnerd Tutors",
  description: "English Communication classes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${gelion.variable} ${humanist.variable}`}>
      <body
        className="font-gelion min-h-screen overflow-x-hidden m-0 p-0 flex flex-col bg-white text-black"
        suppressHydrationWarning={true}
      >
        <MenuProvider>
          <Navbar />
          <main className="flex-grow-[1]">{children}</main>
          <Footer />
        </MenuProvider>
      </body>
    </html>
  );
}
