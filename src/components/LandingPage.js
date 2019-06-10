import React, { useState } from "react";
import logo from "../resources/b-grapher-white.png";
import SettingsInstructions from "./Instructions/SettingsInstructions";
import { Button } from "semantic-ui-react";
import DatasetInstructions from "./Instructions/DatasetInstructions";
import GenerationInstructions from "./Instructions/GenerationInstructions";
import RemakeInstructions from "./Instructions/RemakeInstructions";

const LandingPage = () => {
  const [instructions, setInstructions] = useState(0);

  const handleIncrement = () => {
    if (instructions < 3) setInstructions(prevState => ++prevState);
  };

  const handleDecrement = () => {
    if (instructions > 0) setInstructions(prevState => --prevState);
  };

  const renderInstructions = () => {
    switch (instructions) {
      case 0:
        return <SettingsInstructions />;
      case 1:
        return <DatasetInstructions />;
      case 2:
        return <GenerationInstructions />;
      case 3:
        return <RemakeInstructions />;
      default:
        return <SettingsInstructions />;
    }
  };

  return (
    <div style={{ marginTop: 50 }} className="ui container">
      <img
        src={logo}
        alt="Borjesson Grapher"
        style={{ maxWidth: 320, padding: 10, margin: "auto", display: "block" }}
      />
      <div
        className="ui inverted padded center aligned segment"
        style={{ maxWidth: 600, margin: "auto" }}
      >
        Create beautiful charts with your custom data, and generate a permanent
        sharable link viewable from any device directly in the browser. No login
        required.
      </div>
      <div className="ui centered inverted header" style={{ marginBottom: 15 }}>
        HOW IT WORKS
      </div>
      <div style={{ margin: "auto", maxWidth: 500 }}>
        {renderInstructions()}
        <div style={{ marginTop: 10 }}>
          <Button
            inverted
            basic
            color="green"
            onClick={handleDecrement}
            disabled={instructions === 0 ? true : false}
            floated="left"
            icon="arrow left"
          />
          <Button
            inverted
            basic
            color="green"
            onClick={handleIncrement}
            disabled={instructions === 4 ? true : false}
            floated="right"
            icon="arrow right"
          />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
