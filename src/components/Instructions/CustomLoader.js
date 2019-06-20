import React from "react";
import { Loader, Segment, Dimmer } from "semantic-ui-react";

const CustomLoader = () => {
  return (
    <Segment
      style={{
        maxWidth: 500,
        height: 281,
        padding: 0,
        margin: "auto",
        display: "block",
        border: "solid 3px #cccccc",
        borderRadius: 10
      }}
      inverted
    >
      <Dimmer active>
        <Loader />
      </Dimmer>
    </Segment>
  );
};

export default CustomLoader;
