import React from "react";
import Repeat from "../assets/repeat";
import "./index.css";

const Questions = () => {
  const { count, score } = JSON.parse(
    localStorage.getItem("customize") || "{}"
  );
  return (
    <main className="content summary-container">
      <h1 className="title-medium summary-titles__score">
        Your score is {((score / count) * 100).toFixed(0)}%
      </h1>
      <a href="/question/0">
        <Repeat />
      </a>
      <h2 className="title-small summary-title__repeat">Repeat test</h2>
      <a href="/" className="btn btn-ghost">
        Customise Questions
      </a>
    </main>
  );
};

export default Questions;
