import React from "react";
import Image from "next/image";
import styles from "./question.module.css";
import quizData from "/quiz-data.js";
import Button from "@/Components/Button";

export default function Question({ questionNumber, onClickAnswer }) {
  return (
    <>
      <h1 className={styles.title}>Q.{questionNumber}</h1>
      <Image
        className={styles.man}
        src={`/Q${questionNumber}.png`}
        alt={`Q${questionNumber}`}
        width="300"
        height="300"
      />
      <p className={styles.text}>
        {quizData[Number(questionNumber) - 1]?.question}
      </p>
      <div className={styles.button}>
        <Button
          onClick={() => {
            onClickAnswer(1);
          }}
        >
          Yes
        </Button>
        <Button
          onClick={() => {
            onClickAnswer(2);
          }}
        >
          No
        </Button>
      </div>
    </>
  );
}