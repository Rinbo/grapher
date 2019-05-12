import React from "react";
import XAxisInput from "../XAxisInput";

const GraphContainer = () => {
  //TODO: State for how many XAxis input the user defines. Map each data-series in its own render function.
  return (
    <div className="ui container">
      <div className="ui centered header" style={{ paddingTop: 30 }}>
        Grapher
      </div>
      <XAxisInput />
    </div>
  );
};

export default GraphContainer;
