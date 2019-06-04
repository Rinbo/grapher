import React from "react";
import { Route, Router, Switch } from "react-router-dom";
import history from "../history";
import GraphContainer from "./GraphContainer";
import PublicGraph from "./PublicGraph";
import "semantic-ui-css/semantic.min.css";
import "../app.css";

const routes = () => (
  <Switch>
    <Route path="/" exact component={GraphContainer} />
    <Route path="/graphs/:id" exact component={PublicGraph} />
  </Switch>
);

const App = () => {
  return <Router history={history}>{routes()}</Router>;
};

export default App;
