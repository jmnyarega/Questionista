import React from "react";
import { Link } from "react-router-dom";
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
      <Link to="/question/0">
        <Repeat />
      </Link>
      <h2 className="title-small summary-title__repeat">Repeat test</h2>
      <Link to="/" className="btn btn-ghost">
        Customise Questions
      </Link>
    </main>
  );
};

export default Questions;
