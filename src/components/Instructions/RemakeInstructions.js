import React, { useState, useEffect } from "react";
import gif from "../../resources/d4.gif";
import "./CustomLoader";
import { Transition, Image } from "semantic-ui-react";
import CustomLoader from "./CustomLoader";

const RemakeInstructions = () => {
  const [visiable, setVisiable] = useState(false);

  useEffect(() => {
    setVisiable(true);
  }, []);

  return (
    <div>
      <div style={{ textAlign: "center", marginBottom: 10 }}>
        Copy graph data to continue working
      </div>
      <Transition.Group animation="fade" duration="1000">
        {visiable ? (
          <Image
            src={gif}
            alt="Borjesson Grapher"
            fluid
            style={{
              maxWidth: 500,
              padding: 0,
              margin: "auto",
              display: "block",
              border: "solid 3px #cccccc",
              borderRadius: 10
            }}
          />
        ) : (
          <CustomLoader />
        )}
      </Transition.Group>
    </div>
  );
};

export default RemakeInstructions;
