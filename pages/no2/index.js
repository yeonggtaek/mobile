import React from "react";
import Image from "next/image";
import styles from "./no2.module.css";
import Button from "@/Components/Button";
import Layout from "@/Components/Layout";

export default function No2() {
  return (
    <Layout>
    <section className={styles.quiz}>
      <h1 className={styles.title}>Q.2</h1>
      <Image
        className={styles.no}
        src="/no2.png"
        alt="no2"
        width="300"
        height="300"
      />
      <div className={styles.button}>
      <Button link="quiz3">next</Button>
      </div>
    </section>
    </Layout>
  );
}