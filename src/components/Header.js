import React from "react";
import logo from "../resources/b-grapher-white.png";
import { Link, withRouter } from "react-router-dom";

const Header = props => {
  if (props.location.pathname === "/") return null;
  console.log(props.location.pathname)
  return (
    <div style={{ marginBottom: 20 }}>
      <Link to="/" className="item">
        <img
          src={logo}
          alt="Borjesson Grapher"
          style={{ width: 180, padding: 10 }}
        />
      </Link>
    </div>
  );
};

export default withRouter(Header);
