import React from "react";
import Button from "@/Components/Button";
import styles from "./about.module.css";
import Layout from "@/Components/Layout";

export default function about() {
  return (
    <Layout>
    <section className={styles.about}>
    <div>
      <Button link="/quiz">Next</Button>
    </div>
    </section>
    </Layout>
  );
}