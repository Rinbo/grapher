import React, { useState, useEffect } from "react";
import endpoint from "../apis/endpoint";
import LineGraph from "./graphs/LineGraph";
import SendEmail from "./utility/SendEmail";
import { Button, Icon } from "semantic-ui-react";

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
  const [showEmailForm, setShowEmailForm] = useState(false);
  const publicString = props.match.params.id;

  useEffect(() => {
    endpoint
      .get(`/graphs/${publicString}`)
      .then(response => {
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

  const renderButton = () => {
    return (
      <Button
        inverted
        basic
        color="green"
        onClick={() => setShowEmailForm(true)}
      >
        <Icon name="mail" inverted />Share link
      </Button>
    );
  };

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
      {showEmailForm ? (
        <SendEmail setShowEmailForm={setShowEmailForm} />
      ) : (
        renderButton()
      )}
    </div>
  );
};

export default PublicGraph;
