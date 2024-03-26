import React from "react";
import Image from "next/image";
import styles from "./quiz5.module.css";
import Button from "@/Components/Button";
import Layout from "@/Components/Layout";

export default function Quiz5() {
  return (
    <Layout>
    <section className={styles.quiz}>
      <h1 className={styles.title}>Q.5</h1>
      <Image
        className={styles.quiz5}
        src="/Q5.png"
        alt="Q5"
        width="300"
        height="350"
      />
      <p className={styles.text}>
      Is rising global temperature a major cause of climate change?
      </p>
      <div className={styles.button}>
      <Button link="yes5">Yes</Button>
      <Button link="no5">No</Button>
      </div>
    </section>
    </Layout>
  );
}