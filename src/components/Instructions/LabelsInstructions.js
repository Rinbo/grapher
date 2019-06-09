import React, { useState, useEffect } from "react";
import logo from "../../resources/b-grapher-white.png";
import { Transition } from "semantic-ui-react";

const LabelsInstructions = () => {
  const [visiable, setVisiable] = useState(false);

  useEffect(() => {
    setVisiable(true);
  }, []);

  return (
    <div style={{ height: 300 }}>
      <div style={{ textAlign: "center" }}>Add rows and labels</div>
      <Transition.Group animation="fade" duration="1000">
        {visiable && (
          <img
            src={logo}
            alt="Borjesson Grapher"
            style={{
              width: 320,
              padding: 10,
              margin: "auto",
              display: "block"
            }}
          />
        )}
      </Transition.Group>
    </div>
  );
};

export default LabelsInstructions;
