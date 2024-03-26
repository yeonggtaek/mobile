import React from "react";
import Image from "next/image";
import styles from "./no3.module.css";
import Button from "@/Components/Button";
import Layout from "@/Components/Layout";

export default function No3() {
  return (
    <Layout>
    <section className={styles.quiz}>
      <h1 className={styles.title}>Q.3</h1>
      <Image
        className={styles.no}
        src="/no3.png"
        alt="no3"
        width="300"
        height="300"
      />
      <div className={styles.button}>
      <Button link="quiz4">next</Button>
      </div>
    </section>
    </Layout>
  );
}