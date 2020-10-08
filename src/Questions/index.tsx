import React, { MouseEvent, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Utils from "../utils/js";
import "./index.css";

const Questions = () => {
  const {
    questions,
    level,
    answers: savedAnswers,
    type,
    topic,
    percentage: curPercentage,
  } = JSON.parse(localStorage.getItem("customize") || "{}");

  const { question: index } = useParams();

  if (!questions[index]) {
    const questionNumber = Object.keys(savedAnswers).length;
    if (index > questions.length - 1) {
      window.location.href = `#/question/${questionNumber}`;
      window.location.reload();
    } else if (index < 0) {
      window.location.href = `#/question/0`;
      window.location.reload();
    }
  }

  const currentQuestion = questions[index];

  const [answers, setAnswer] = useState(Utils.choices(questions, index));
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isCorrect, setIsCorrect] = useState();
  const [clickedIndex, setClickedIndex] = useState(0);
  const [percentage, setPercentage] = useState(curPercentage);
  const [currentScore, setScore] = useState(0);

  document.documentElement.style.setProperty(
    "--percentage",
    `${percentage * 100}%`
  );

  const dangerouslyFormat = (content: string) => {
    return { __html: content };
  };

  const checkAnswer = (_: MouseEvent, answer: number) => {
    const correct = answers[answer] === currentQuestion.correct_answer;
    setClickedIndex(answer);
    setIsCorrect(correct);
    setPercentage((Number(index) + 1) / questions.length);
    correct && setScore(currentScore + 1);
  };

  const confirmNumbers = () => {
    const saved = JSON.parse(localStorage.getItem("customize") || "{}");
    const data = JSON.stringify({
      ...saved,
      percentage,
      score: currentScore,
      answers: {
        ...saved.answers,
        [index]: answers[clickedIndex],
      },
    });
    localStorage.setItem("customize", data);
  };

  useEffect(() => {
    if (currentIndex !== index) {
      setAnswer(Utils.choices(questions, index));
      setClickedIndex(-1);
    }
    if (
      savedAnswers[index] !== undefined &&
      savedAnswers[0] !== savedAnswers[1]
    ) {
      setClickedIndex(answers.indexOf(savedAnswers[index]));
      setIsCorrect(savedAnswers[index] === currentQuestion.correct_answer);
    }

    setCurrentIndex(index);
    // eslint-disable-next-line
  }, [currentIndex, index]);

  return (
    <main className="content">
      <div className="content-question__container">
        <div className="content-question__progressbar">
          <span className="progress" />
        </div>
        <div className="content-question__badges">
          <span className="badge badge__type">{type}</span>
          <span className="badge badge__level">{level}</span>
          <span className="badge badge__music">{topic.name.split(":")[0]}</span>
        </div>
        <div className="content-title__container">
          <h2
            className="content-title title-small question-title"
            dangerouslySetInnerHTML={dangerouslyFormat(
              currentQuestion.question
            )}
          />
        </div>
      </div>
      <div className="content-answers__container">
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
              <span dangerouslySetInnerHTML={dangerouslyFormat(answer)} />
            </button>
          </div>
        ))}
      </div>
      <div className="cta">
        {index < questions.length - 1 && clickedIndex >= 0 && (
          <Link
            to={{ pathname: `/question/${Number(index) + 1}` }}
            className="btn content-btn"
            onClick={confirmNumbers}
          >
            Next
          </Link>
        )}
        {Number(index) === questions.length - 1 && clickedIndex >= 0 && (
          <Link
            to={{ pathname: `/summary` }}
            className="btn content-btn"
            onClick={confirmNumbers}
          >
            Submit
          </Link>
        )}
      </div>
    </main>
  );
};

export default Questions;
