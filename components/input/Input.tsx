import React from 'react';
import styles from "@/app/(routes)/Contact/contact.module.css";

interface Props {
    type: string;
    id: string;
    name: string;
    value: string;
    handleChange?: any;
    placeholder: string;
    error?: string
}

export const Input: React.FC<Props> = ({
    type,
    id,
    name,
    value,
    handleChange,
    placeholder,
    error,
  }) => {
    return (
      <>
        <div className={styles["input-container"]}>
          <input
            type={type}
            id={id}
            name={name}
            value={value}
            className={`${styles["input-field"]} ${
              error && value ? styles["input-error"] : ""
            }`}
            onChange={handleChange}
            required
            placeholder=" "
          />
          <label htmlFor={id} className={styles["input-label"]}>
            {placeholder}
          </label>
          {error && value.length > 0 && (
          <small className={styles["danger"]}>{error}</small>
        )}
        </div>
       
      </>
    );
  };
  