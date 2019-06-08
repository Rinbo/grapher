import React, { useState, useEffect } from "react";
import endpoint from "../apis/endpoint";
import LineGraph from "./graphs/LineGraph";
import PieGraph from "./graphs/PieGraph";
import SendEmail from "./utility/SendEmail";
import ConfirmationModal from "./utility/ConfirmationModal";
import history from "../history";
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
        style={{ marginTop: 15 }}
        onClick={() => setShowEmailForm(true)}
      >
        <Icon name="mail" inverted />
        Share link
      </Button>
    );
  };

  const flashSuccess = () => {
    const flashMessage = document.getElementById("flash");
    flashMessage.style.visibility = "visible";
    flashMessage.style.opacity = 1;
    setTimeout(() => {
      flashMessage.style.opacity = 0;
      flashMessage.style.visibility = "hidden";
    }, 2000);
  };

  const renderGraph = () => {
    if (userOptions.graphType === "pie") {
      return (
        <PieGraph
          labels={xAxisLabels}
          datasetNames={datasetNames}
          datasets={yInputs}
          axisNames={axisNames}
          userOptions={userOptions}
          showLegend={true}
        />
      );
    } else {
      return (
        <LineGraph
          labels={xAxisLabels}
          datasetNames={datasetNames}
          datasets={yInputs}
          axisNames={axisNames}
          userOptions={userOptions}
          showLegend={true}
        />
      );
    }
  };

  const pushForRemake = () => {
    history.push(`/graphs/remake/${publicString}`);
  };

  return (
    <div className="ui container">
      <div
        className="ui centered inverted header"
        style={{ textTransform: "uppercase" }}
      >
        {title}
      </div>
      {renderGraph()}
      <div id="flash">Email successfully sent</div>
      {showEmailForm ? (
        <SendEmail
          setShowEmailForm={setShowEmailForm}
          flashSuccess={flashSuccess}
        />
      ) : (
        renderButton()
      )}
      <div>
        <ConfirmationModal
          onSubmit={pushForRemake}
          prompt="This will copy the graph data to a new canvas for you to continue working on. 
            The old link and graph will not be affected. When you have made your changes you can 
            generate a new link for sharing. Are you sure you want to continue?"
          buttonName="Keep working"
        />
      </div>
    </div>
  );
};

export default PublicGraph;
