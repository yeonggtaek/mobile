import React, { useState, useEffect } from "react";
import styles from "./quiz.module.css";
import Layout from "@/Components/Layout";
import { useRouter } from "next/router";
import Question from "@/Components/Question";
import Answer from "@/Components/Answer";
import quizData from "@/quiz-data";
import Score from "@/Components/Score";
import QuizStart from "@/Components/QuizStart";

export default function Quiz() {
  const router = useRouter();
  const { q, state } = router.query;

  const [score, setScore] = useState(0);
  const [start, setStart] = useState(false);
  const [currentQuestionNumber, setCurrentQuestionNumber] = useState(q || 0);
  const [hasAnswer, setHasAnswer] = useState(null);
  const [correctAnswer, setCorrectAnswer] = useState(false);
  const [questionEnd, setQuestionEnd] = useState(false);

  useEffect(() => {
    if (!start) {
      router.push({
        query: {},
      });
    }
  }, []);

  useEffect(() => {
    setCurrentQuestionNumber(q || 0);
  }, [router.query]);

  const onClickAnswer = (userAnswer) => {
    setHasAnswer(userAnswer);
    const answer = quizData[Number(currentQuestionNumber) - 1].answer;
    setScore(score + (answer === userAnswer ? 1 : 0));
    setCorrectAnswer(answer === userAnswer);
  };

  const onClickNextQuestion = () => {
    router.push({
      query: { q: Number(currentQuestionNumber) + 1 },
    });
    setCurrentQuestionNumber(Number(currentQuestionNumber) + 1);
    setHasAnswer(null);
  };

  useEffect(() => {
    if (currentQuestionNumber > 5) {
      router.push({
        query: { state: "score" },
      });
    }
  }, [currentQuestionNumber]);

  return (
    <Layout>
      <section className={styles.quiz}>
        {state === "score" ? (
          <Score score={score}/>
        ) : currentQuestionNumber ? (
          hasAnswer ? (
            <Answer
              questionNumber={currentQuestionNumber}
              userAnswer={hasAnswer}
              onClickNextQuestion={onClickNextQuestion}
            />
          ) : (
            <Question
              questionNumber={currentQuestionNumber}
              onClickAnswer={onClickAnswer}
            />
          )
        ) : (
          <QuizStart
            onClick={() => {
              router.push({
                query: { q: 1 },
              });
              setHasAnswer(false);
              setScore(0);
              setStart(true);
            }}
          />
        )}
      </section>
    </Layout>
  );
}