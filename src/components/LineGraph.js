import React from "react";
import { Line } from "react-chartjs-2";
import { options } from "./options";

const LineGraph = ({ labels, datasets, datasetNames, axisNames, userOptions }) => {
  const renderDatasets = () => {
    return datasets.map((dataset, index) => {
      return {                        
        label: datasetNames[index],
        backgroundColor: userOptions.fillColor ? userOptions.backgroundColor : "",
        borderColor: "rgba(33,186,69,1)",
        borderWidth: 1,
        defaultFontColor: "#cccccc",
        hoverBackgroundColor: "rgba(33,186,69,0.4)",
        hoverBorderColor: "rgba(33,186,69,1)",
        data: [...dataset]
      };
    });
  };

  return (
    <div style={{ paddingTop: 20, paddingBottom:10 }}>
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
