import React from "react";
import { Pie } from "react-chartjs-2";
import { options } from "../utility/options";
import { BG_COLOR, HOVER_COLOR, randomizer } from "./colors";

const PieGraph = ({
  labels,
  datasets,
  datasetNames,
  axisNames,
  showLegend
}) => {
  const renderDatasets = () => {
    return datasets.map((dataset, index) => {
      if (dataset.length > BG_COLOR.length) {
        BG_COLOR.push(
          `rgba(${randomizer()}, ${randomizer()}, ${randomizer()}, 0.2)`
        );
      }

      return {
        label: datasetNames[index],
        backgroundColor: BG_COLOR,
        borderWidth: 1,
        defaultFontColor: "#cccccc",
        hoverColor: HOVER_COLOR,
        data: [...dataset]
      };
    });
  };

  return (
    <div style={{ paddingTop: 20, paddingBottom: 10 }}>
      <Pie
        data={{
          labels: labels,
          datasets: renderDatasets()
        }}
        width={400}
        height={400}
        options={options(axisNames[0], axisNames[1], showLegend, false, false)}
      />
    </div>
  );
};

export default PieGraph;
