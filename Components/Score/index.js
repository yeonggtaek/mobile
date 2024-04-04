import React from "react";
import Button from "../Button";
import Image from "next/image";
import Link from "next/link";
import styles from "./score.module.css";

export default function Score({ score }) {
  return (
    <>
      <Image src="/score.png" alt="score" width="150" height="150"/>
      <p className={styles.text}>Great Job!</p>
      <p className={styles.score}>score: {score}</p>
      <Button link="quiz">retry</Button>
      <div className={styles.learn}>
        <Link href="/learnmore">learnmore</Link>
      </div>
    </>
  );
}