import React, { useState } from "react";
import history from "../history";
import DatasetInputter from "./inputs/DatasetInputter";
import LineGraph from "./graphs/LineGraph";
import SettingsModal from "./utility/SettingsModal";
import XAxisLabelInputter from "./inputs/XAxisLabelInputter";
import DatasetNames from "./inputs/DatasetNames";
import endpoint from "../apis/endpoint";
import convertToDto from "./utility/convertToDto";
import { Button } from "semantic-ui-react";
import ConfirmationModal from "./utility/ConfirmationModal";

const GraphContainer = () => {
  const [yInputs, setYInputs] = useState([[1, 8, 4], [2, 3, 7]]);
  const [xAxisLabels, setXAxisLabels] = useState([1, 2, 3]);
  const [datasetNames, setDatasetNames] = useState(["Dataset 1", "Dataset 2"]);
  const [axisNames, setAxisNames] = useState(["X-axis", "Y-axis"]);
  const [title, setTitle] = useState("Graph Title");
  const [userOptions, setUserOptions] = useState({
    color: "green",
    fillColor: true
  });

  const onSubmit = e => {
    e.preventDefault();
    const restObject = convertToDto(
      yInputs,
      datasetNames,
      xAxisLabels,
      axisNames,
      userOptions,
      title
    );
    endpoint
      .post("/graphs", { ...restObject })
      .then(response => {
        history.push(`/graphs/${response.data.publicString}`);
      })
      .catch(e => console.log("Oh noooo!", e));
  };

  const renderDataSeries = () => {
    return (
      <div className="grid">
        <XAxisLabelInputter
          labels={xAxisLabels}
          setLabels={setXAxisLabels}
          addDataPoints={addDataPoints}
        />
        {yInputs.map((arr, index) => {
          return (
            <div key={index} style={{ marginBottom: 10 }}>
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
                removeSetName={removeSetName}
              />
            </div>
          );
        })}
        <Button
          basic
          inverted
          color="green"
          style={{ minHeight: "100%" }}
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

  const removeSetName = index => {
    const newState = datasetNames.filter(e => e !== datasetNames[index]);
    setDatasetNames(newState);
  };

  const randomArray = length => {
    const arr = [];
    for (let i = 0; i < length; i++) {
      arr.push(Math.floor(Math.random() * 10));
    }
    return arr;
  };

  const addDataSets = e => {
    e.preventDefault();
    const newYinputs = [
      ...yInputs,
      randomArray(yInputs[0] ? yInputs[0].length : xAxisLabels.length)
    ];
    setYInputs(newYinputs);

    const newNames = [...datasetNames, `Dataset ${datasetNames.length + 1}`];
    setDatasetNames(newNames);
  };

  const addDataPoints = e => {
    e.preventDefault();
    const newYState = yInputs.map(arr => [...arr, 0]);
    setYInputs(newYState);
    setXAxisLabels(prevState => [...prevState, prevState.length + 1]);
  };

  return (
    <div className="ui container" style={{ paddingBottom: 20 }}>
      <div
        className="ui centered inverted header"
        style={{ textTransform: "uppercase" }}
      >
        {title}
      </div>
      <LineGraph
        labels={xAxisLabels}
        datasetNames={datasetNames}
        datasets={yInputs}
        axisNames={axisNames}
        userOptions={userOptions}
        showLegend={false}
      />
      <div>
        <SettingsModal
          setAxisNames={setAxisNames}
          setUserOptions={setUserOptions}
          userOptions={userOptions}
          axisNames={axisNames}
          title={title}
          setTitle={setTitle}
          content=""
          modalTitle="Graph Settings"
          buttonName="Settings"
        />
        <ConfirmationModal onSubmit={onSubmit} />
      </div>
      <form onSubmit={e => onSubmit(e)} id="dataForm">
        {renderDataSeries()}
      </form>
      <div style={{ marginTop: 10 }} />
    </div>
  );
};

export default GraphContainer;
