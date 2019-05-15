import React, { useState } from "react";
import XAxisInput from "./XAxisInput";
import YAxisInputs from "./YAxisInputs";
import "../app.css";
import LineGraph from "./LineGraph";

const GraphContainer = () => {
  const [xInputs, setXInputs] = useState([[0, 0, 0], [0, 0, 0]]);
  const [yInputs, setYInputs] = useState([0, 0, 0]);

  const renderDataSeries = () => {
    return (
      <div className="grid">
        {xInputs.map((arr, index) => (
          <XAxisInput
            key={index}
            inputs={xInputs}
            setInputs={setXInputs}
            dataSeriesIndex={index}
          />
        ))}
        <YAxisInputs inputs={yInputs} setInputs={setYInputs} />
      </div>
    );
  };

  const addDataPoints = e => {
    e.preventDefault();
    const newXState = xInputs.map(arr => [...arr, 0]);
    setXInputs(newXState);
    setYInputs(prevState => [...prevState, 0]);
  };

  return (
    <div className="ui container">
      <div className="ui centered header" style={{ paddingTop: 30 }}>
        Grapher
      </div>
      <LineGraph />
      <form onSubmit={() => alert(xInputs)}>
        {renderDataSeries()}
        <button className="ui basic button" style={{ marginTop: 10 }}>
          Submit
        </button>
      </form>
      <div style={{ marginTop: 10 }}>
        <button
          className="ui basic tiny black button"
          onClick={e => addDataPoints(e)}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default GraphContainer;
