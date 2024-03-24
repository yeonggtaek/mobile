import React from "react";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import styles from "./layout.module.css";

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
}