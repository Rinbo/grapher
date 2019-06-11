import React from "react";
import { Route, Router, Switch } from "react-router-dom";
import history from "../history";
import GraphContainer from "./GraphContainer";
import PublicGraph from "./PublicGraph";
import LandingPage from "./LandingPage";
import Header from "./Header";
import "semantic-ui-css/semantic.min.css";
import "../app.css";

const routes = () => (
  <Switch>
    <Route
      path={`${process.env.PUBLIC_URL}/`}
      exact
      render={props => <LandingPage props={props} />}
    />
    />
    <Route
      path={`${process.env.PUBLIC_URL}/graphs`}
      exact
      render={props => <GraphContainer props={props} />}
    />
    />
    <Route
      path={`${process.env.PUBLIC_URL}/graphs/:id`}
      exact
      render={props => <PublicGraph props={props} />}
    />
    <Route
      path={`${process.env.PUBLIC_URL}/graphs/remake/:id`}
      exact
      render={props => <GraphContainer props={props} />}
    />
    <Route path="*" to="/index.html" />
  </Switch>
);

const App = () => {
  return (
    <div style={{ paddingBottom: 80 }}>
      <Router history={history}>
        <Header />
        {routes()}
      </Router>
      {/*<div className="borjessons-footer">{"Copyright \u00A9 borjessons"}</div>*/}
    </div>
  );
};

export default App;
