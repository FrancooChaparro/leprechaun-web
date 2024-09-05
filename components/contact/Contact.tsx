import React from "react";
import styles from "./contact.module.css";
import {WhatsAppIcon} from "@/Icons/CartIcon";
import {InstagramIcon} from "@/Icons/CartIcon";

export const Contact = () => {
  return (
    <div className={styles["container-contact"]}>
      <div className={styles["container-contact-header"]}>
        <h4>LEPRECHAUN destailing shop</h4>
      </div>
      <div className={styles["container-contact-footer"]}>
        <a href="https://www.instagram.com/leprechaundetailingshop/" target="blank">
          <InstagramIcon />
        </a>
        <a href="https://web.whatsapp.com/send?phone=5491155618446" target="blank">
          <WhatsAppIcon />
        </a>
      </div>
    </div>
  );
};
