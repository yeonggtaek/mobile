import React from "react";
import Image from "next/image";
import styles from "./yes4.module.css";
import Button from "@/Components/Button";
import Layout from "@/Components/Layout";

export default function Yes4() {
  return (
    <Layout>
    <section className={styles.quiz}>
      <h1 className={styles.title}>Q.4</h1>
      <Image
        className={styles.yes}
        src="/yes.png"
        alt="yes"
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