import React from "react";

import { Img } from "../assets/img";
import { TopLeft } from "../assets/top-left";
import { BottomRight } from "../assets/bottom-right";
import { BottomLeft } from "../assets/bottom-left";
import { TopRight } from "../assets/top-right";
import "./index.css";

const Home = () => {
  return (
    <React.Fragment>
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
    </React.Fragment>
  );
};

export default Home;
