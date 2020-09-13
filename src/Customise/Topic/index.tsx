import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Input, AutoComplete } from "antd";
import Utils from "../../utils/js";
import "./index.css";

const Topic = () => {
  useEffect(() => {
    axios
      .get("https://opentdb.com/api_category.php")
      .then((response: { data: { trivia_categories: [] } }): any => {
        const options = Utils.format(response.data.trivia_categories, "Topic");
        //@ts-ignore
        setOptions(options);
      });
  }, []);
  const [options, setOptions] = useState([{ options: [] }]);
  const [topic, setTopic] = useState(0);

  const onChange = (name: string) => {
    const topic =
      options.length &&
      //@ts-ignore
      options[0].options.find((opt: { value: string }) => opt.value === name)
        .id;
    setTopic(topic);
  };

  const selectTopic = () => {
    return topic;
  };

  return (
    <main className="content">
      <h2 className="content-title">Customise your questions</h2>

      <div className="content-form">
        <label htmlFor="category" className="content-label">
          Select <strong>category</strong> of questions you want to answer
        </label>
        <AutoComplete
          dropdownClassName="certain-category-search-dropdown"
          options={options}
          onChange={onChange}
          id="category"
        >
          <Input.Search size="large" placeholder="Select Question Type" />
        </AutoComplete>
      </div>
      <div className="content-next">
        <Link
          to={{ pathname: "/type" }}
          onClick={selectTopic}
          className="btn btn-ghost"
        >
          Next
        </Link>
      </div>
    </main>
  );
};

export default Topic;
