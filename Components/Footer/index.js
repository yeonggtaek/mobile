import React from "react";
import Link from "next/link";
import styles from "./footer.module.css";
import Image from "next/image";

export default function footer() {
  return (
    <footer className={styles.footer}>
      <Link href="/">
        <Image
          className={styles.home}
          src="/Home.png"
          alt="Home"
          width="60"
          height="50"
        />
      </Link>
    </footer>
  );
}