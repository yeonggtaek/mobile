import React from "react";
import Button from "../Button";
import Image from "next/image";
import styles from "./quizstart.module.css";

export default function QuizStart({ onClick }) {
  return (
    <>
      <h1 className={styles.title}>Quiz</h1>
      <Image src="/man.png" alt="man" width="190" height="300"/>
      <p className={styles.text}>
        Let’s learn about climate change issues through quizzes.
      </p>
      <Button onClick={onClick}>Start</Button>
    </>
  );
}