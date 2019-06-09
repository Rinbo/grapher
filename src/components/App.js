import React from "react";
import { Route, Router, Switch, Link } from "react-router-dom";
import history from "../history";
import GraphContainer from "./GraphContainer";
import PublicGraph from "./PublicGraph";
import LandingPage from "./LandingPage";
import logo from "../resources/b-grapher-white.png";
import "semantic-ui-css/semantic.min.css";
import "../app.css";

const routes = () => (
  <Switch>
    <Route path="/" exact render={props => <LandingPage props={props} />} />
    />
    <Route
      path="/graphs"
      exact
      render={props => <GraphContainer props={props} />}
    />
    />
    <Route
      path="/graphs/:id"
      exact
      render={props => <PublicGraph props={props} />}
    />
    <Route
      path="/graphs/remake/:id"
      exact
      render={props => <GraphContainer props={props} />}
    />
  </Switch>
);

const App = () => {
  return (
    <div>
      <Router history={history}>
        <div style={{ marginBottom: 20 }}>
          <Link to="/" className="item">
            <img
              src={logo}
              alt="Borjesson Grapher"
              style={{ width: 180, padding: 10 }}
            />
          </Link>
        </div>
        {routes()}
      </Router>
    </div>
  );
};

export default App;
