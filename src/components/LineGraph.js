import React from "react";
import { Line } from "react-chartjs-2";
import { options } from "./options";

const LineGraph = ({
  labels,
  datasets,
  datasetNames,
  axisNames,
  userOptions
}) => {
  const renderDatasets = () => {
    return datasets.map((dataset, index) => {
      let borderColor;
      let backgroundColor;
      let hoverBackgroundColor;
      let hoverBorderColor;

      if (userOptions.color === "multi") {
        const r = 255 * Math.floor(Math.random() * 2);
        const g = 255 * Math.floor(Math.random() * 2);
        const b = 255 * Math.floor(Math.random() * 2);
        borderColor = `rgba(${r}, ${g}, ${b}, 1)`;
        backgroundColor = `rgba(${r}, ${g}, ${b}, 0.2)`;
        hoverBackgroundColor = `rgba(${r}, ${g}, ${b}, 0.4)`;
        hoverBorderColor = `rgba(${r}, ${g}, ${b}}, 1)`;
      } else {
        borderColor = "rgba(33,186,69,1)";
        backgroundColor = "rgba(33,186,69,0.2)";
        hoverBackgroundColor = "rgba(33,186,69,0.4)";
        hoverBorderColor = "rgba(33,186,69,1)";
      }
      console.log(borderColor);

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
        options={options(axisNames[0], axisNames[1])}
      />
    </div>
  );
};

export default LineGraph;
