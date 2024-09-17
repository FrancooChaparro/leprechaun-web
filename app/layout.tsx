import type { Metadata } from "next";
import { Nav } from "@/components/nav/Nav";
import "./globals.css";
import { Footer } from "@/components/footer/Footer";
import { Contact } from "@/components/contact/Contact";
import { roboto } from "@/utils/fonts";
import MyProvider from "@/context/ListProvider";

export const metadata: Metadata = {
  title: "Leprechaun®",
  description: "LEPRECHAUN destailing shop website",
  icons: {
    icon: "favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <MyProvider>
      <body className={roboto.className}>
         <Nav />
          {children}
          <Contact />
          <Footer />
      </body>
    </MyProvider>
    </html>
  );
}
