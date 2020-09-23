import React from "react";
import { Switch, Route } from "react-router-dom";
import { Type, Level, Count, Home, Start, Topic } from "./Customise";
import Question from "./Questions";
import Summary from "./Summary";

import "./Customise/Topic/index.css";

function App() {
  return (
    <div className="container">
      <Home />
      <Switch>
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

        <Route path="/summary">
          <Summary />
        </Route>

        <Route path="/question/:question">
          <Question />
        </Route>

        <Route path="/">
          <Topic />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
