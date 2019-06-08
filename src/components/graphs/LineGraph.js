import React from "react";
import { Line } from "react-chartjs-2";
import { options } from "../utility/options";
import { BG_COLOR, BORDER_COLOR, HOVER_COLOR, randomizer } from "./colors.js";

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

      if (userOptions.color === "multi") {
        borderColor = BORDER_COLOR[index];
        backgroundColor = BG_COLOR[index];
        hoverBackgroundColor = HOVER_COLOR[index];
        if (index >= BG_COLOR.length) {
          borderColor = `rgb(${randomizer()}, ${randomizer()}, ${randomizer()})`;
          backgroundColor = `rgba(${randomizer()}, ${randomizer()}, ${randomizer()}, 0.2)`;
          backgroundColor = `rgba(${randomizer()}, ${randomizer()}, ${randomizer()}, 0.5)`;
        }
      } else if (userOptions.color === "green") {
        borderColor = "rgba(33,186,69,1)";
        backgroundColor = "rgba(33,186,69,0.2)";
        hoverBackgroundColor = "rgba(33,186,69,0.4)";
      } else {
        borderColor = "rgb(170, 4, 54)";
        backgroundColor = "rgba(170, 4, 54, 0.2)";
        hoverBackgroundColor = "rgba(170, 4, 54, 0.4)";
      }

      return {
        label: datasetNames[index],
        backgroundColor: userOptions.fillColor ? backgroundColor : "",
        borderColor: borderColor,
        borderWidth: 1,
        defaultFontColor: "#cccccc",
        hoverBackgroundColor,
        hoverBorderColor: borderColor,
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
