import React from "react";
import Image from "next/image";
import Button from "@/Components/Button";
import styles from "./answer.module.css";
import quizData from "@/quiz-data";

export default function Answer({
  questionNumber,
  userAnswer,
  onClickNextQuestion,
}) {
  const answer = quizData[questionNumber - 1].answer;
  return (
    <>
      <h1 className={styles.title}>Q.{questionNumber}</h1>
      <Image
        className={styles.no}
        src={answer === userAnswer ? "/yes.png" : `/no${questionNumber}.png`}
        alt={answer === userAnswer ? "yes" : "no"}
        width="300"
        height="300"
      />
      <div className={styles.button}>
        <Button onClick={onClickNextQuestion}>next</Button>
      </div>
    </>
  );
}