import React, { useState } from "react";
import DatasetInputter from "./DatasetInputter";
import LineGraph from "./LineGraph";
import SettingsModal from "./utility/SettingsModal";

const GraphContainer = () => {
  const [yInputs, setYInputs] = useState([[0, 0, 0], [0, 0, 0]]);
  const [titles, setTitles] = useState(["Robin", "Sixten"]);
  const [labels, setLabels] = useState(["Time", "Score"]);

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
    const newXState = yInputs.map(arr => [...arr, 0]);
    setYInputs(newXState);
    setYInputs(prevState => [...prevState, 0]);
  };

  const renderModal = () => {
    return null;
  };

  return (
    <div className="ui container">
      <div className="ui centered header" style={{ paddingTop: 30 }}>
        Grapher
      </div>
      <LineGraph labels={labels} titles={titles} />
      <SettingsModal
        setLabels={setLabels}
        labels={labels}
        content=""
        title="Graph Settings"
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
