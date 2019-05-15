import React from "react";
import { Line } from "react-chartjs-2";
import { options } from "./options";

const LineGraph = () => {
  return (
    <div>
      <Line
        data={{
          labels: [1, 2, 3, 4, 5, 6, 7, 8],
          datasets: [
            {
              label: "Evolution over time",
              backgroundColor: "rgba(33,186,69,0.2)",
              borderColor: "rgba(33,186,69,1)",
              borderWidth: 1,
              defaultFontColor: "#cccccc",
              hoverBackgroundColor: "rgba(33,186,69,0.4)",
              hoverBorderColor: "rgba(33,186,69,1)",
              data: [1, 3, 2, 4, 5, 6, 4, 2]
            }
          ]
        }}
        width={400}
        height={400}
        options={options("Time", "Score")}
      />
    </div>
  );
};

export default LineGraph;
