import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const Start = () => {
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
