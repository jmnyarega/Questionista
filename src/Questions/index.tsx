import React, { MouseEvent, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Utils from "../utils/js";
import "./index.css";

const Questions = () => {
  const {
    questions,
    level,
    type,
    topic,
    percentage: curPercentage,
  } = JSON.parse(localStorage.getItem("customize") || "{}");
  const { question: index } = useParams();
  const currentQuestion = questions[index];

  const [answers, setAnswer] = useState(Utils.choices(questions, index));
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isCorrect, setIsCorrect] = useState();
  const [clickedIndex, setClickedIndex] = useState(-1);
  const [percentage, setPercentage] = useState(curPercentage);

  document.documentElement.style.setProperty("--percentage", `${percentage}%`);

  const question = (question: string) => {
    return { __html: `<span> ${index}. </span> ${question}` };
  };

  const formatAnswer = (answer: string) => {
    return { __html: answer };
  };

  const checkAnswer = (_: MouseEvent, answer: number) => {
    setClickedIndex(answer);
    setIsCorrect(answers[answer] === currentQuestion.correct_answer);
    setPercentage(index / questions.length);
    const data = JSON.stringify({
      ...JSON.parse(localStorage.getItem("customize") || "{}"),
      percentage,
    });
    localStorage.setItem("customize", data);
  };

  useEffect(() => {
    if (currentIndex !== index) {
      setAnswer(Utils.choices(questions, index));
      setClickedIndex(-1);
    }
    setCurrentIndex(index);
    // eslint-disable-next-line
  }, [currentIndex, index]);

  return (
    <main className="content">
      <div className="content-question__container">
        <div className="content-question__progressbar">
          <span className="progress">{percentage * 100}% </span>
        </div>
        <div className="content-question__badges">
          <span className="badge badge__type">{type}</span>
          <span className="badge badge__level">{level}</span>
          <span className="badge badge__music">{topic.name.split(":")[0]}</span>
        </div>
        <h2
          className="content-title title-small question-title"
          dangerouslySetInnerHTML={question(currentQuestion.question)}
        />
      </div>

      {answers.map((answer: any, i: number) => (
        <div className="content-answers">
          <button
            className={`content-answer ${
              isCorrect === true && i === clickedIndex
                ? "correct"
                : isCorrect === false && i === clickedIndex
                ? "wrong"
                : "no answer"
            }`}
            disabled={clickedIndex >= 0}
            onClick={(e) => checkAnswer(e, i)}
          >
            <span dangerouslySetInnerHTML={formatAnswer(answer)} />
          </button>
        </div>
      ))}
      <div className="cta">
        {index < questions.length - 1 && clickedIndex >= 0 && (
          <Link
            to={{ pathname: `/question/${Number(index) + 1}` }}
            className="btn btn-ghost"
          >
            Next
          </Link>
        )}
        {Number(index) === questions.length - 1 && clickedIndex >= 0 && (
          <Link to={{ pathname: `/results` }} className="btn btn-ghost">
            Submit
          </Link>
        )}
      </div>
    </main>
  );
};

export default Questions;
