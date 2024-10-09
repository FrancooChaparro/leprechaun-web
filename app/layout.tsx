import type { Metadata } from "next";
import "./globals.css";
import { roboto } from "@/utils/fonts";
import MyProvider from "@/context/ListProvider";
import { NavFooterWrapper } from "@/components/Nav-footer-wrapper/NavFooterWrapper";

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
      <NavFooterWrapper>
            {children}
      </NavFooterWrapper>
      </body>
    </MyProvider>
    </html>
  );
}
