import React, { useState } from "react";
import { Link } from "react-router-dom";
import Utils from "../../utils/js";
import { Input, AutoComplete } from "antd";
import "./index.css";

const Level = () => {
  const levelOptions = [
    { name: "easy", id: 1 },
    { name: "medium", id: 2 },
    { name: "hard", id: 3 },
  ];
  const data = Utils.format(levelOptions, "Level");
  const [level, setLevel] = useState("");

  const onChange = () => {
    setLevel(level);
  };

  const selectLevel = () => {
    return level;
  };

  return (
    <main className="content">
      <h2 className="content-title">Customise your questions</h2>

      <div className="content-form">
        <label htmlFor="category" className="content-label">
          Select <strong> level </strong> of questions you want to answer
        </label>
        <AutoComplete
          dropdownClassName="certain-category-search-dropdown"
          options={data}
          onChange={onChange}
          id="category"
        >
          <Input.Search size="large" placeholder="Select Question Level" />
        </AutoComplete>
      </div>
      <div className="content-btn__container">
        <div className="content-next">
          <Link to={{ pathname: "/topic" }} className="btn btn-ghost">
            Previous
          </Link>
        </div>
        <div className="content-next">
          <Link
            to={{ pathname: "/count" }}
            onClick={selectLevel}
            className="btn btn-ghost"
          >
            Next
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Level;
