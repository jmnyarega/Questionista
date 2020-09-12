import React, { useEffect, useState } from "react";
import axios from "axios";
import { Input, AutoComplete } from "antd";
import Utils from "../utils/js/index";
import { Img } from "../assets/img";
import { TopLeft } from "../assets/top-left";
import { BottomRight } from "../assets/bottom-right";
import { BottomLeft } from "../assets/bottom-left";
import { TopRight } from "../assets/top-right";
import "./index.css";

const Home = () => {
  useEffect(() => {
    axios
      .get("https://opentdb.com/api_category.php")
      .then((response: { data: { trivia_categories: [] } }): any => {
        const options = Utils.format(response.data.trivia_categories);
        //@ts-ignore
        setOptions(options);
      });
  }, []);
  const [options, setOptions] = useState([{ options: [] }]);
  const onChange = (name: string) => {
    const topic =
      options.length &&
      options[0].options.find((opt: { value: string }) => opt.value === name);
    //@ts-ignore
    console.log(topic.id);
  };
  return (
    <div className="container">
      <aside className="sidebar">
        <h2 className="sidebar-text">
          Improve your IQ by answering as many questions as possible
        </h2>
        <div className="sidebar-img">
          <Img />
        </div>
      </aside>
      <div className="main">
        <div className="main-topleft">
          <TopLeft />
        </div>
        <div className="main-bottomleft">
          <BottomLeft />
        </div>
        <div className="main-bottomright">
          <BottomRight />
        </div>
        <div className="main-topright">
          <TopRight />
        </div>
      </div>
      <main className="content">
        <h2 className="content-title">Customise your questions</h2>
        <div className="content-form">
          <label htmlFor="category" className="content-label">
            Category of questions you want to answer
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
          <a href="" className="btn btn-ghost">
            Next
          </a>
        </div>
      </main>
    </div>
  );
};

export default Home;
