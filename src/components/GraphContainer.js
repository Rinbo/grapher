import React, { useState } from "react";
import DatasetInputter from "./DatasetInputter";
import LineGraph from "./LineGraph";
import SettingsModal from "./utility/SettingsModal";

const GraphContainer = () => {
  const [yInputs, setYInputs] = useState([[0, 0, 0], [0, 0, 0]]);
  const [dataSetTitles, setDataSetTitles] = useState(["Robin", "Sixten"]);
  const [axisNames, setAxisNames] = useState(["Time", "Score"]);
  const [title, setTitle] = useState("My Graph");

  const renderDataSeries = () => {
    return (
      <div className="grid">
        {yInputs.map((arr, index) => (
          <DatasetInputter
            key={index}
            inputs={yInputs}
            setInputs={setYInputs}
            dataSeriesIndex={index}
          />
        ))}
      </div>
    );
  };

  const addDataPoints = e => {
    e.preventDefault();
    const newYState = yInputs.map(arr => [...arr, 0]);
    setYInputs(newYState);
  };

  return (
    <div className="ui container">
      <div className="ui centered header" style={{ paddingTop: 30 }}>
        {title}
      </div>
      <LineGraph setAxisNames={setAxisNames} titles={dataSetTitles} />
      <SettingsModal
        setAxisNames={setAxisNames}
        axisNames={axisNames}
        title={title}
        setTitle={setTitle}
        content=""
        modalTitle="Graph Settings"
        buttonName="Change Settings"
      />
      <form onSubmit={() => alert(yInputs)}>
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
