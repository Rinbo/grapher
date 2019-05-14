import React from "react";
import { Route, Router, Switch } from "react-router-dom";
import history from "../history";
import GraphContainer from "./GraphContainer";
import "../app.css"

const routes = () => (
  <Switch>
    <Route path="/" exact component={GraphContainer} />
  </Switch>
);

const App = () => {
  return <Router history={history}>{routes()}</Router>;
};

export default App;
