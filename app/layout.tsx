import type { Metadata } from "next";
import { Inter, Oswald, Roboto } from "next/font/google";
import { Nav } from "@/components/nav/Nav";
import "./globals.css";
import { Footer } from "@/components/footer/Footer";
import { Contact } from "@/components/contact/Contact";

// const inter = Oswald({ subsets: ["latin"] });
const inter = Roboto({
  style: ["normal"],
  subsets: ["latin"],
  weight: ["400"],
});

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
      <body className={inter.className}>
        <Nav />
        {children}
        <Contact />
        <Footer />
      </body>
    </html>
  );
}
