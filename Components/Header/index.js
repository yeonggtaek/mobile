import React from "react";
import styles from "./header.module.css";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();
  const goBack = () => {
    router.back();
  };

  return (
    <header className={styles.header}>
      <div className={styles.backContainer} onClick={goBack}>
        <Image
          className={`${styles.back}`}
          src="/arrow.png"
          alt="back"
          width="60"
          height="53"
        />
      </div>
      <div className={styles.logoContainer}>
        <Image
          className={styles.logo}
          src="/logo.png"
          alt="logo"
          width="102"
          height="57"
        />
      </div>
      <div className={styles.menuContainer}>
        <Image
          className={styles.menu}
          src="/menu.png"
          alt="menu"
          width="60"
          height="53"
        />
      </div>
    </header>
  );
}