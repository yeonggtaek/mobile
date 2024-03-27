import React from "react";
import Image from "next/image";
import styles from "./readmore.module.css";
import Button from "@/Components/Button";
import Layout from "@/Components/Layout";

export default function Readmore() {
  return (
    <Layout>
    <h1>Environmental Conservation</h1>
    <p>Reducing Waste</p>
    <p>The Food Industry & You</p>
    <p>Water Conservation</p>
    <p>Renewable Energy</p>

    <section className={styles.earth}>
      <Image
        className={styles.earth6}
        src="/earth6.png"
        alt="earth6"
        width="300"
        height="300"
      />
      <Button link="end">Next</Button>
    </section>
    </Layout>
  );
}