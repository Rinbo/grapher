import React, { useState } from "react";
import XAxisInput from "../XAxisInput";

const GraphContainer = () => {
  const [inputs, setInputs] = useState([[0, 0, 0], [0,0,0]]);
  const renderXDataSeries = () => {
    return inputs.map((arr, index) => (
      <XAxisInput
        key={index}
        inputs={inputs}
        setInputs={setInputs}
        dataSeriesIndex={index}
      />
    ));
  };
  return (
    <div className="ui container">
      <div className="ui centered header" style={{ paddingTop: 30 }}>
        Grapher
      </div>
      <form onSubmit={() => alert(inputs)}>
        {renderXDataSeries()}
        <button className="ui basic button" style={{ marginTop: 10 }}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default GraphContainer;
