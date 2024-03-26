import React from "react";
import Image from "next/image";
import styles from "./quiz.module.css";
import Button from "@/Components/Button";

export default function Quiz() {
  return (
    <section className={styles.quiz}>
      <h1 className={styles.title}>Quiz</h1>
      <Image
        className={styles.man}
        src="/man.png"
        alt="man"
        width="190"
        height="300"
      />
      <p className={styles.text}>
        Let’s learn about climate change issues through quizzes.
      </p>
      <Button link="quiz/1">Start</Button>
    </section>
  );
}