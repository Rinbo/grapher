import React, { useState, useEffect } from "react";
import gif from "../../resources/d2.gif";
import { Transition, Image } from "semantic-ui-react";
import CustomLoader from "./CustomLoader";

const DatasetInstructions = () => {
  const [visiable, setVisiable] = useState(false);

  useEffect(() => {
    setVisiable(true);
  }, []);

  return (
    <div>
      <div style={{ textAlign: "center", marginBottom: 10 }}>
        Add your labels and datasets
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

export default DatasetInstructions;
