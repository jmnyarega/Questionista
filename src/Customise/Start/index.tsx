import React, { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./index.css";

const Start = () => {
  const customize = JSON.parse(localStorage.getItem("customize") || "{}");
  const amount = customize && customize.count;
  const category = customize && customize.topic && customize.topic.id;
  const level = customize && customize.level;
  const type = customize && customize.type;

  useEffect(() => {
    axios
      .get(
        `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${level}&type=${type}`
      )
      .then((response: any) => {
        console.log(response);
        const newData = {
          ...customize,
          questions: response.data.results,
        };
        localStorage.setItem("customize", JSON.stringify(newData));
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <main className="content">
      <h2 className="content-title">
        Congratulations, your questions are now ready
      </h2>

      <div className="content-start">
        <Link to={{ pathname: "/#" }} onClick={() => {}} className="btn">
          Get Started
        </Link>
      </div>
    </main>
  );
};

export default Start;
