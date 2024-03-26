import React from "react";
import Image from "next/image";
import styles from "./no5.module.css";
import Button from "@/Components/Button";
import Layout from "@/Components/Layout";

export default function No5() {
  return (
    <Layout>
    <section className={styles.quiz}>
      <h1 className={styles.title}>Q.5</h1>
      <Image
        className={styles.no}
        src="/no5.png"
        alt="no5"
        width="300"
        height="300"
      />
      <div className={styles.button}>
      <Button link="score">next</Button>
      </div>
    </section>
    </Layout>
  );
}