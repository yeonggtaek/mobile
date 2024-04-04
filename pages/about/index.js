import React from "react";
import Image from "next/image";
import Button from "@/Components/Button";
import styles from "./about.module.css";
import Layout from "@/Components/Layout";

export default function about() {
  return (
    <Layout>
    <section className={styles.about}>
    <Image
        className={styles.graph}
        src="/graph.png"
        alt="graph"
        width="300"
        height="200"
      />
        <Image
        className={styles.bear}
        src="/bear.png"
        alt="bear"
        width="300"
        height="300"
      />
    <div className={styles.button}>
      <Button link="/quiz">Next</Button>
    </div>
    </section>
    </Layout>
  );
}