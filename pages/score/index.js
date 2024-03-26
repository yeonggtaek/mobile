import React from "react";
import Image from "next/image";
import styles from "./score.module.css";
import Button from "@/Components/Button";
import Layout from "@/Components/Layout";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Quiz() {
    const router = useRouter();
  return (
    <Layout>
    <section className={styles.quiz}>
      <Image
        className={styles.man}
        src="/score.png"
        alt="score"
        width="150"
        height="150"
      />
      <p className={styles.text}>
        Great Job!
      </p>
      <p className={styles.sscore}>score:</p>
      <Button link="quiz">retry</Button>
    </section>
    <div className={router.pathname === "/learnmore" ? styles.text : ""}></div>
    <Link href="/learnmore">learnmore</Link>
    </Layout>
  );
}