import React from "react";
import styles from "./contact.module.css";
import {WhatsAppIcon} from "@/Icons/CartIcon";
import {InstagramIcon} from "@/Icons/CartIcon";

export const Contact = () => {
  return (
    <div className="w-[100%] p-8 border-t-[1px] border-[black] flex justify-center items-center flex-col gap-[10px]">
      <div className="p-[0.5rem] text-[black] text-base">
        <h4>LEPRECHAUN destailing shop</h4>
      </div>
      <div className={styles["container-contact-footer"]}>
        <a className="flex justify-center items-center h-10 text-[#1b1b1b] cursor-pointer hover:opacity-70" href="https://www.instagram.com/leprechaundetailingshop/" target="blank">
          <InstagramIcon />
        </a>
        <a className="flex justify-center items-center h-10 text-[#1b1b1b] cursor-pointer hover:opacity-70" href="https://web.whatsapp.com/send?phone=5491155618446" target="blank">
          <WhatsAppIcon />
        </a>
      </div>
    </div>
  );
};
