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
  const customize = JSON.parse(localStorage.getItem("customize") || "{}");
  const data = Utils.format(levelOptions, "Level");
  const [level, setLevel] = useState(customize && customize.level);

  const onChange = (level: string) => {
    setLevel(level);
  };

  const selectLevel = () => {
    const data = JSON.stringify({
      ...customize,
      level,
    });
    localStorage.setItem("customize", data);
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
          defaultValue={level}
          id="category"
        >
          <Input.Search size="large" placeholder="Select Question Level" />
        </AutoComplete>
      </div>
      <div className="content-btn__container">
        <div className="content-next">
          <Link to={{ pathname: "/type" }} className="btn btn-ghost">
            Previous
          </Link>
        </div>
        <div className="content-next">
          <Link
            to={{ pathname: "/count" }}
            onClick={selectLevel}
            className="btn"
          >
            Next
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Level;
