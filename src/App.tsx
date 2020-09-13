import React from "react";
import { Switch, Route } from "react-router-dom";
import Topic from "./Customise/Topic";
import Type from "./Customise/Type";
import Level from "./Customise/Level";
import Count from "./Customise/Count";
import Home from "./Home";
import Start from "./Customise/Start";
import "./Customise/Topic/index.css";

function App() {
  return (
    <div className="container">
      <Home />
      <Switch>
        <Route path="/topic">
          <Topic />
        </Route>
        <Route path="/type">
          <Type />
        </Route>
        <Route path="/level">
          <Level />
        </Route>
        <Route path="/count">
          <Count />
        </Route>
        <Route path="/start">
          <Start />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
