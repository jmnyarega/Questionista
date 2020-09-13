import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";

const Count = () => {
  const [count, setCount] = useState(0);

  const onChange = () => {
    setCount(count);
  };

  const selectCount = () => {
    return count;
  };

  return (
    <main className="content">
      <h2 className="content-title">Customise your questions</h2>

      <div className="content-form">
        <label htmlFor="category" className="content-label">
          Select <strong> number </strong> of questions you want to answer
        </label>
        <input
          className="content-form__count"
          type="number"
          name=""
          id=""
          min="0"
          max="50"
          placeholder="Select number of questions"
          onChange={onChange}
        />
      </div>
      <div className="content-btn__container">
        <div className="content-next">
          <Link to={{ pathname: "/level" }} className="btn btn-ghost">
            Previous
          </Link>
        </div>
        <div className="content-next">
          <Link
            to={{ pathname: "/start" }}
            onClick={selectCount}
            className="btn btn-ghost"
          >
            Next
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Count;
