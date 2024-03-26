import React from "react";
import Image from "next/image";
import styles from "./quiz1.module.css";
import Button from "@/Components/Button";
import Layout from "@/Components/Layout";

export default function Quiz1() {
  return (
    <Layout>
    <section className={styles.quiz}>
      <h1 className={styles.title}>Q.1</h1>
      <Image
        className={styles.man}
        src="/Q1.png"
        alt="Q1"
        width="300"
        height="300"
      />
      <p className={styles.text}>
      Is climate change affecting marine ecosystems?
      </p>
      <div className={styles.button}>
      <Button link="yes">Yes</Button>
      <Button link="no">No</Button>
      </div>
    </section>
    </Layout>
  );
}