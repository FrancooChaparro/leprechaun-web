"use client"
import React, { useRef, useState } from 'react';
import styles from "./contact.module.css"
const Contact = () => {
  const countRef = useRef(0); // Almacena un valor que no provoca re-renderización
  const [renderCount, setRenderCount] = useState(0);

  const incrementCount = () => {
      countRef.current++; // Incrementa el valor referenciado
  };

  const forceRender = () => {
      setRenderCount(prev => prev + 1); // Fuerza un renderizado
  };
  return (
    <div className={styles["container-contact"]}>
      <h1>Contact</h1>
      <h1>Contact</h1>
      <h1>Contact</h1>
      <div>
            <p>Count (ref): {countRef.current}</p>
            <p>Render Count: {renderCount}</p>
            <button onClick={incrementCount}>Incrementar Count (ref)</button>
            <button onClick={forceRender}>Forzar Renderizado</button>
        </div>
    </div>
  );
};


export default Contact;


