import React, { useState, useEffect } from "react";
import endpoint from "../apis/endpoint";

const PublicGraph = ({ props }) => {
  const [yInputs, setYInputs] = useState([[], []]);
  const [xAxisLabels, setXAxisLabels] = useState([]);
  const [datasetNames, setDatasetNames] = useState([]);
  const [axisNames, setAxisNames] = useState([]);
  const [title, setTitle] = useState();

  useEffect(() => {
    const publicString = props.match.params.id;
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
  return <div>Graph!!</div>;
};

export default PublicGraph;
