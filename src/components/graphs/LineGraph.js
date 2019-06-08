import React from "react";
import { Line } from "react-chartjs-2";
import { options } from "../utility/options";
import { BG_COLOR, BORDER_COLOR, HOVER_COLOR } from "./colors.js";

const LineGraph = ({
  labels,
  datasets,
  datasetNames,
  axisNames,
  userOptions,
  showLegend
}) => {
  const renderDatasets = () => {
    return datasets.map((dataset, index) => {
      let borderColor;
      let backgroundColor;
      let hoverBackgroundColor;
      let hoverBorderColor;
      let i;

      if (userOptions.color === "multi") {
        index >= BORDER_COLOR.length
          ? (i = Math.floor(Math.random() * 9))
          : (i = index);

        borderColor = BORDER_COLOR[i];
        backgroundColor = BG_COLOR[i];
        hoverBackgroundColor = HOVER_COLOR[i];
        hoverBorderColor = BORDER_COLOR[i];
      } else if (userOptions.color === "green") {
        borderColor = "rgba(33,186,69,1)";
        backgroundColor = "rgba(33,186,69,0.2)";
        hoverBackgroundColor = "rgba(33,186,69,0.4)";
        hoverBorderColor = "rgba(33,186,69,1)";
      } else {
        borderColor = "rgb(170, 4, 54)";
        backgroundColor = "rgba(170, 4, 54, 0.2)";
        hoverBackgroundColor = "rgba(170, 4, 54, 0.4)";
        hoverBorderColor = "rgba(170, 4, 54, 1)";
      }

      return {
        label: datasetNames[index],
        backgroundColor: userOptions.fillColor ? backgroundColor : "",
        borderColor: borderColor,
        borderWidth: 1,
        defaultFontColor: "#cccccc",
        hoverBackgroundColor,
        hoverBorderColor,
        data: [...dataset]
      };
    });
  };

  return (
    <div style={{ paddingTop: 20, paddingBottom: 10 }}>
      <Line
        data={{
          labels: labels,
          datasets: renderDatasets()
        }}
        width={400}
        height={400}
        options={options(axisNames[0], axisNames[1], showLegend)}
      />
    </div>
  );
};

export default LineGraph;