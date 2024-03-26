import React from "react";
import Image from "next/image";
import styles from "./no.module.css";
import Button from "@/Components/Button";
import Layout from "@/Components/Layout";

export default function No() {
  return (
    <Layout>
    <section className={styles.quiz}>
      <h1 className={styles.title}>Q.1</h1>
      <Image
        className={styles.no}
        src="/no.png"
        alt="no"
        width="300"
        height="300"
      />
      <div className={styles.button}>
      <Button link="quiz2">next</Button>
      </div>
    </section>
    </Layout>
  );
}