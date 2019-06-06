import React, { useState, useEffect } from "react";
import endpoint from "../apis/endpoint";
import LineGraph from "./graphs/LineGraph";

const PublicGraph = ({ props }) => {
  const [yInputs, setYInputs] = useState([[], []]);
  const [xAxisLabels, setXAxisLabels] = useState([]);
  const [datasetNames, setDatasetNames] = useState([]);
  const [axisNames, setAxisNames] = useState([]);
  const [title, setTitle] = useState();
  const [userOptions, setUserOptions] = useState({
    color: null,
    fillColor: null
  });
  const publicString = props.match.params.id;

  useEffect(() => {
    endpoint
      .get(`/graphs/${publicString}`)
      .then(response => {
        console.log(response.data)
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
        setUserOptions(response.data.userOptions);
        setTitle(res.title);
      })
      .catch(e => alert("Failed to fetch graph data"));
  }, [publicString]);
  return (
    <div className="ui container">
      <div
        className="ui centered inverted header"
        style={{ textTransform: "uppercase" }}
      >
        {title}
      </div>
      <LineGraph
        title={title}
        labels={xAxisLabels}
        datasetNames={datasetNames}
        datasets={yInputs}
        axisNames={axisNames}
        userOptions={userOptions}
      />
    </div>
  );
};

export default PublicGraph;
