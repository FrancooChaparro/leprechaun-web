import React from 'react';
import styles from "./filter.module.css"

export const Filter = ({ isOpen } : { isOpen: boolean}) => {
  return (
    <>
    {isOpen && <div className={styles['overlay-menu-container']} />}
    <section className={`${styles["container-section-burger-menu"]} ${isOpen ? styles["active"] : ""}`}>
        <div className={styles["wraper"]}>
           <h1>BURGER MENU....</h1>
        </div>
    </section>
</>
  )
}
