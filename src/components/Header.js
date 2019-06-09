import React from "react";
import logo from "../resources/b-grapher-white.png";
import { Link } from "react-router-dom";

const Header = () => {
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

export default Header;
