
"use client"; 
import { usePathname } from "next/navigation";
import { Nav } from "@/components/nav/Nav";
import { Contact } from "@/components/contact/Contact";
import { Footer } from "@/components/footer/Footer";
import { NavCheckout } from "../nav-checkout/NavCheckout";

export const NavFooterWrapper = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  const hideNavAndFooter = pathname === "/Contact"; // Cambia la ruta según sea necesario

  return (
    <>
      {!hideNavAndFooter ? <Nav /> : <NavCheckout />}
      {children}
      {!hideNavAndFooter && <Contact />}
      {!hideNavAndFooter && <Footer />}
    </>
  );
};
