import React from "react";
import Image from "next/image";
import styles from "./quiz3.module.css";
import Button from "@/Components/Button";
import Layout from "@/Components/Layout";

export default function Quiz3() {
  return (
    <Layout>
    <section className={styles.quiz}>
      <h1 className={styles.title}>Q.3</h1>
      <Image
        className={styles.quiz3}
        src="/Q3.png"
        alt="Q3"
        width="300"
        height="300"
      />
      <p className={styles.text}>
      Is carbon dioxide one of the greenhouse gases?
      </p>
      <div className={styles.button}>
      <Button link="yes3">Yes</Button>
      <Button link="no3">No</Button>
      </div>
    </section>
    </Layout>
  );
}