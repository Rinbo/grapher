import React, { useState } from "react";
import DatasetInputter from "./DatasetInputter";
import LineGraph from "./LineGraph";
import SettingsModal from "./utility/SettingsModal";
import XAxisLabelInputter from "./XAxisLabelInputter";
import DatasetNames from "./DatasetNames";
import { Button } from "semantic-ui-react";

const GraphContainer = () => {
  const [yInputs, setYInputs] = useState([[1, 8, 4], [2, 3, 7]]);
  const [xAxisLabels, setXAxisLabels] = useState([1, 2, 3]);
  const [datasetNames, setDatasetNames] = useState(["Robin", "Sixten"]);
  const [axisNames, setAxisNames] = useState(["Time", "Score"]);
  const [title, setTitle] = useState("My Graph");

  const renderDataSeries = () => {
    return (
      <div className="grid">
        <XAxisLabelInputter labels={xAxisLabels} setLabels={setXAxisLabels} />
        {yInputs.map((arr, index) => {
          return (
            <div>
              <DatasetNames
                names={datasetNames}
                setNames={setDatasetNames}
                index={index}
              />
              <DatasetInputter
                key={index}
                inputs={yInputs}
                setInputs={setYInputs}
                dataSeriesIndex={index}
              />
            </div>
          );
        })}
        <Button
          basic
          onClick={e => {
            e.preventDefault();
            addDataSets(e);
          }}
        >
          +
        </Button>
      </div>
    );
  };

  const addDataSets = e => {
    return null;
  };

  const addDataPoints = e => {
    e.preventDefault();
    const newYState = yInputs.map(arr => [...arr, 0]);
    setYInputs(newYState);
    setXAxisLabels(prevState => [...prevState, prevState.length + 1]);
  };

  return (
    <div className="ui container" style={{ paddingBottom: 20 }}>
      <div className="ui centered header" style={{ paddingTop: 30 }}>
        {title}
      </div>
      <SettingsModal
        setAxisNames={setAxisNames}
        axisNames={axisNames}
        title={title}
        setTitle={setTitle}
        content=""
        modalTitle="Graph Settings"
        buttonName="Settings"
      />
      <Button
        basic
        color={"black"}
        style={{ width: 130, marginTop: 15, marginBottom: 20 }}
      >
        Generate link
      </Button>
      <LineGraph
        labels={xAxisLabels}
        datasetNames={datasetNames}
        datasets={yInputs}
        axisNames={axisNames}
      />
      <form onSubmit={() => alert(yInputs)} style={{ marginTop: 20 }}>
        {renderDataSeries()}
        <div
          style={{ marginTop: 10 }}
          className="ui basic tiny black button"
          onClick={e => addDataPoints(e)}
        >
          +
        </div>
      </form>
      <div style={{ marginTop: 10 }} />
    </div>
  );
};

export default GraphContainer;
