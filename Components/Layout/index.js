import React from "react";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import styles from "./layout.module.css";

export default function Layout({ children }) {
  return (
    <div className={styles.layoutContainer}>
      <div className={styles.layout}>
        <Header />
        <main className={styles.main}>{children}</main>
        <Footer />
      </div>
    </div>
  );
}