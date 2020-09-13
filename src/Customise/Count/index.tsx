import React, { useState } from "react";
import { InputNumber, Form } from "antd";
import { Link } from "react-router-dom";

const Count = () => {
  const customize = JSON.parse(localStorage.getItem("customize") || "{}");
  const [count, setCount] = useState(customize && customize.number);
  const FormItem = Form.Item;

  const onChange = (count: any) => {
    setCount(count);
  };

  const selectCount = () => {
    const data = JSON.stringify({
      ...customize,
      count,
    });
    localStorage.setItem("customize", data);
  };

  return (
    <main className="content">
      <h2 className="content-title">Customise your questions</h2>

      <div className="content-form">
        <label htmlFor="category" className="content-label">
          Select <strong> number </strong> of questions you want to answer
        </label>
        <FormItem hasFeedback validateStatus="success">
          <InputNumber
            style={{ width: "100%" }}
            className="content-form__count"
            placeholder="Select number of questions"
            onChange={onChange}
            defaultValue={count}
          />
        </FormItem>
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
