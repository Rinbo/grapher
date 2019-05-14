import React, { useState } from "react";
import XAxisInput from "./XAxisInput";
import YAxisInputs from "./YAxisInputs";

const GraphContainer = () => {
  const [xInputs, setXInputs] = useState([[0, 0, 0], [0, 0, 0]]);
  const [yInputs, setYInputs] = useState([0, 0, 0]);
  const renderXDataSeries = () => {
    return xInputs.map((arr, index) => (
      <XAxisInput
        key={index}
        inputs={xInputs}
        setInputs={setXInputs}
        dataSeriesIndex={index}
      />
    ));
  };
  return (
    <div className="ui container">
      <div className="ui centered header" style={{ paddingTop: 30 }}>
        Grapher
      </div>
      <form onSubmit={() => alert(xInputs)}>
        {renderXDataSeries()}
        <YAxisInputs inputs={yInputs} setInputs={setYInputs} />
        <button className="ui basic button" style={{ marginTop: 10 }}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default GraphContainer;
