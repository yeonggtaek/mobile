import React from "react";
import Image from "next/image";
import Button from "@/Components/Button";
import styles from "./about.module.css";
import Layout from "@/Components/Layout";

export default function about() {
  return (
    <Layout>
    <section className={styles.about}>
    <div className={styles.text}>
    <p>Climate Chart</p>
    </div>
    <Image
        className={styles.graph}
        src="/graph.png"
        alt="graph"
        width="300"
        height="300"
      />
      <div className={styles.text2}>
      <p>Climate change is the gradual increase in the overall temperature of the Earth's atmosphere attributed to the greenhouse effect caused by increased levels of carbon dioxide, chlorofluorocarbons (CFCs), and other pollutants. This phenomenon has been evidenced by various indicators and studies.</p>
      </div>
    <Image
            className={styles.bear}
            src="/bear.png"
            alt="graph"
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