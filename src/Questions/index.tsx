import React from "react";
import { Link, useParams } from "react-router-dom";
import "./index.css";

const Questions = () => {
  const { questions } = JSON.parse(localStorage.getItem("customize") || "{}");
  const { question: index } = useParams();
  const currentQuestion = questions[index];

  const question = (question: string) => {
    return { __html: question };
  };

  return (
    <main className="content">
      <div className="content-question__container">
        <h2 dangerouslySetInnerHTML={question(currentQuestion.question)} />
      </div>
      <div className="content-btn__container">
        <div className="cta">
          {index >= 1 && (
            <Link
              to={{ pathname: `/question/${Number(index) - 1}` }}
              className="btn btn-ghost"
            >
              previous
            </Link>
          )}
        </div>
        <div className="cta">
          {index < questions.length - 1 && (
            <Link
              to={{ pathname: `/question/${Number(index) + 1}` }}
              className="btn btn-ghost"
            >
              Next
            </Link>
          )}
        </div>
      </div>
    </main>
  );
};

export default Questions;
