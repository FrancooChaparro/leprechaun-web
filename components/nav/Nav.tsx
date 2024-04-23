import React from 'react';
import styles from "./Nav.module.css";

export const Nav = () => {
  return (
    <div className={styles["container-all"]}>
        <div>LEPRECHAUN</div>
        <div className={styles["container-data"]}>
            <span>CATEGORIAS</span><span>CONTACTO</span><span>CONOCENOS</span>
        </div>
        <div>CONTACTO</div>
    </div>
  )
}
