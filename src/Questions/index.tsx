import React, { MouseEvent, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Utils from "../utils/js";
import "./index.css";

const Questions = () => {
  const { questions } = JSON.parse(localStorage.getItem("customize") || "{}");
  const { question: index } = useParams();
  const currentQuestion = questions[index];

  const [answers, setAnswer] = useState(Utils.choices(questions, index));
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isCorrect, setIsCorrect] = useState();
  const [clickedIndex, setClickedIndex] = useState(-1);

  const question = (question: string) => {
    return { __html: question };
  };

  const checkAnswer = (_: MouseEvent, answer: number) => {
    setClickedIndex(answer);
    setIsCorrect(answers[answer] === currentQuestion.correct_answer);
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
            <span dangerouslySetInnerHTML={question(answer)} />
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
