import React, { useState } from "react";
import logo from "../resources/b-grapher-white.png";
import { Button } from "semantic-ui-react";

const LandingPage = () => {
  const [instructions, setInstructions] = useState(1);

  const handleClick = (e, props, offset) => {
    console.log(e.target);
  };

  const renderInstructions = () => {
    switch (instructions) {
      case 1:
        return <SettingsInstructions />;
      case 2:
        return <LabelsInstructions />;
      default:
        return <SettingsInstructions />;
    }
  };

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
        sharable link viewable from any device directly in the browser. No login
        required.
      </div>
      <div className="ui centered inverted header">HOW IT WORKS</div>
      {renderInstructions}
      <div className="borjessons-footer">{"Copyright \u00A9 borjessons"}</div>
    </div>
  );
};

export default LandingPage;
