import React from "react";
import Link from "next/link";
import styles from "./button.module.css";

export default function Button({ link, onClick, children }) {
  if (link) {
    return (
      <Link className={styles.button} href={link}>
        {children}
      </Link>
    );
  }
  return (
    <button onClick={onClick} className={styles.button}>
      {children}
    </button>
  );
}