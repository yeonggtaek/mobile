import React, { useState } from "react";
import styles from "./header.module.css";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Header() {
  const router = useRouter();
  const goBack = () => {
    router.back();
  };

  const [isShowMenu, setIsShowMenu] = useState(false);

  const showMenu = () => {
    setIsShowMenu(true);
    hideMenu(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.backContainer} onClick={goBack}>
        <Image
          className={`${styles.back}`}
          src="/arrow.png"
          alt="back"
          width="60"
          height="50"
        />
      </div>
      <div className={styles.logoContainer}>
        <Image
          className={styles.logo}
          src="/logo.png"
          alt="logo"
          width="100"
          height="60"
        />
      </div>
      <div className={styles.menuContainer}>
        <Image
          className={styles.menu}
          src="/menu.png"
          alt="menu"
          width="60"
          height="50"
        />
      </div>
      <div className={styles.menu} onClick={showMenu}></div>
      {isShowMenu && (
        <div className={styles.menuScreen}>
          <ul>
            <li className={router.pathname === "/" ? styles.active : ""}>
              <Link href="/">Home</Link>
            </li>
            <li className={router.pathname === "/About" ? styles.active : ""}>
              <Link href="/About">About</Link>
            </li>
            <li className={router.pathname === "/quiz" ? styles.active : ""}>
              <Link href="/learnmore">Quiz</Link>
            </li>
            <li className={router.pathname === "/learnmore" ? styles.active : ""}>
            <Link href="/learnmore">Learnmore</Link>
          </li>
          </ul>
          <button onClick={hideMenu}>X</button>
        </div>
      )}
    </header>
  );
}