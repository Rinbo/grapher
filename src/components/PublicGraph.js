import React, { useState, useEffect } from "react";
import endpoint from "../apis/endpoint";
import LineGraph from "./LineGraph";

const PublicGraph = ({ props }) => {
  const [yInputs, setYInputs] = useState([[], []]);
  const [xAxisLabels, setXAxisLabels] = useState([]);
  const [datasetNames, setDatasetNames] = useState([]);
  const [axisNames, setAxisNames] = useState([]);
  const [title, setTitle] = useState();
  const publicString = props.match.params.id;

  useEffect(() => {
    endpoint
      .get(`/graphs/${publicString}`)
      .then(response => {
        console.log(response.data);
        const res = response.data;
        const inputs = res.yInputs.map(arr => {
          return arr.dataPoints.map(dataPoint => dataPoint.dataPoint);
        });
        setYInputs(inputs);
        setXAxisLabels(res.xAxisLabels.map(label => label.xAxisLabel));
        setDatasetNames(
          res.datasetNames.map(datasetName => datasetName.datasetName)
        );
        setAxisNames([res.xAxisName, res.yAxisName]);
        setTitle(res.title);
      })
      .catch(e => alert("Failed to fetch graph data"));
  }, []);
  return (
    <div className="ui container">
      <div className="ui centered header" style={{ paddingTop: 30 }}>
        {title}
      </div>
      <LineGraph
        title={title}
        labels={xAxisLabels}
        datasetNames={datasetNames}
        datasets={yInputs}
        axisNames={axisNames}
      />
    </div>
  );
};

export default PublicGraph;
