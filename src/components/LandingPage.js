import React from "react";
import logo from "../resources/b-grapher-white.png";

const LandingPage = () => {
  return (
    <div style={{ marginTop: 50 }} className="ui container">
      <img
        src={logo}
        alt="Borjesson Grapher"
        style={{ width: 320, padding: 10, margin: "auto", display: "block" }}
      />
      <div
        className="ui inverted padded center aligned segment"
        style={{ maxWidth: 600, margin: "auto" }}
      >
        Create beautiful charts with your custom data, and generate a permanent
        sharable link viewable from any device directly in the browser. No login required.
      </div>
    </div>
  );
};

export default LandingPage;
