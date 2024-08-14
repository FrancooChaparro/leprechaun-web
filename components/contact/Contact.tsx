import React from "react";
import styles from "./contact.module.css";
import WhatsAppIcon from "@/Icons/WhatsAppIcon";
import InstagramIcon from "@/Icons/InstagramIcon";

export const Contact = () => {
  return (
    <div className={styles["container-contact"]}>
      <div className={styles["container-contact-header"]}>
        <h4>LEPRECHAUN destailing shop</h4>
      </div>
      <div className={styles["container-contact-footer"]}>
        <a href="">
          <InstagramIcon />
        </a>
        <a href="">
          <WhatsAppIcon />
        </a>
      </div>
    </div>
  );
};
