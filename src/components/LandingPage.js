import React, { useState } from "react";
import logo from "../resources/b-grapher-white.png";
import SettingsInstructions from "./Instructions/SettingsInstructions";
import LabelsInstructions from "./Instructions/LabelsInstructions";
import { Button } from "semantic-ui-react";
import DatasetInstructions from "./Instructions/DatasetInstructions";
import GenerationInstructions from "./Instructions/GenerationInstructions";
import RemakeInstructions from "./Instructions/RemakeInstructions";

const LandingPage = () => {
  const [instructions, setInstructions] = useState(0);

  const handleIncrement = () => {
    if (instructions < 4) setInstructions(prevState => ++prevState);
  };

  const handleDecrement = () => {
    if (instructions > 0) setInstructions(prevState => --prevState);
  };

  const renderInstructions = () => {
    switch (instructions) {
      case 0:
        return <SettingsInstructions />;
      case 1:
        return <LabelsInstructions />;
      case 2:
        return <DatasetInstructions />;
      case 3:
        return <GenerationInstructions />;
      case 4:
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
      <div className="ui centered inverted header" style={{marginBottom: 35}}>HOW IT WORKS</div>
      <div style={{ margin: "auto", width: 600 }}>
        {renderInstructions()}
        <div style={{ marginTop: 15 }}>
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
      <div className="borjessons-footer">{"Copyright \u00A9 borjessons"}</div>
    </div>
  );
};

export default LandingPage;
