import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./index.css";

const Start = () => {
  const customize = JSON.parse(localStorage.getItem("customize") || "{}");
  const amount = customize && customize.count;
  const category = customize && customize.topic && customize.topic.id;
  const level = customize && customize.level;
  const type = customize && customize.type;

  const [availableQuesstions, setQuestions] = useState({ questions: [] });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${level}&type=${type}`
      )
      .then((response: any) => {
        const newData = {
          ...customize,
          questions: response.data.results,
        };
        setQuestions(newData);
        localStorage.setItem("customize", JSON.stringify(newData));
        setLoading(false);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <main className="content">
      {!loading && availableQuesstions.questions.length ? (
        <h2 className="content-title">
          Congratulations, your questions are now ready
        </h2>
      ) : (
        <h2 className="content-title">
          {loading
            ? "Getting the questions..."
            : "There are no questions found, kindly adjust your parameters"}
        </h2>
      )}

      <div className="content-start">
        {!loading && availableQuesstions.questions.length ? (
          <Link to={{ pathname: "/question/1" }} className="btn">
            Get Started
          </Link>
        ) : (
          <Link to={{ pathname: `${loading ? "#" : "/"}` }} className="btn">
            {loading ? "loading..." : "Try Again"}
          </Link>
        )}
      </div>
    </main>
  );
};

export default Start;
