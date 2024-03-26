import React from "react";
import Image from "next/image";
import styles from "./quiz2.module.css";
import Button from "@/Components/Button";
import Layout from "@/Components/Layout";

export default function Quiz2() {
  return (
    <Layout>
    <section className={styles.quiz}>
      <h1 className={styles.title}>Q.2</h1>
      <Image
        className={styles.quiz2}
        src="/Q2.png"
        alt="Q2"
        width="300"
        height="250"
      />
      <p className={styles.text}>
      Are natural disasters increasing due to climate change?
      </p>
      <div className={styles.button}>
      <Button link="yes2">Yes</Button>
      <Button link="no2">No</Button>
      </div>
    </section>
    </Layout>
  );
}