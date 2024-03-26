import React from "react";
import Image from "next/image";
import styles from "./no4.module.css";
import Button from "@/Components/Button";
import Layout from "@/Components/Layout";

export default function No4() {
  return (
    <Layout>
    <section className={styles.quiz}>
      <h1 className={styles.title}>Q.4</h1>
      <Image
        className={styles.no}
        src="/no4.png"
        alt="no4"
        width="300"
        height="300"
      />
      <div className={styles.button}>
      <Button link="quiz5">next</Button>
      </div>
    </section>
    </Layout>
  );
}