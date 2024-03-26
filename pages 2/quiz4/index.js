import React from "react";
import Image from "next/image";
import styles from "./quiz4.module.css";
import Button from "@/Components/Button";
import Layout from "@/Components/Layout";

export default function Quiz4() {
  return (
    <Layout>
    <section className={styles.quiz}>
      <h1 className={styles.title}>Q.4</h1>
      <Image
        className={styles.quiz4}
        src="/Q4.png"
        alt="Q4"
        width="350"
        height="300"
      />
      <p className={styles.text}>
      Is rapid melting of sea ice a result of climate change?
      </p>
      <div className={styles.button}>
      <Button link="yes4">Yes</Button>
      <Button link="no4">No</Button>
      </div>
    </section>
    </Layout>
  );
}