import React from "react";
import quizData from "/quiz-data.js";

export default function QuizDetail() {
  return <div>{quizData[0].question}</div>;
}