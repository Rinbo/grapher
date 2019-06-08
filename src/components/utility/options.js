export const options = (xlabel, ylabel, legend, showX = true, showY = true) => {
  const opts = {
    legend: {
      display: legend,
      position: "bottom"
    },
    scales: {
      xAxes: [
        {
          display: showX,
          gridLines: {
            display: false,
            color: "#cccccc"
          },
          scaleLabel: {
            display: true,
            labelString: xlabel
          }
        }
      ],
      yAxes: [
        {
          display: showY,
          gridLines: {
            display: true,
            color: "rgba(204, 204, 204, 0.5)"
          },
          scaleLabel: {
            display: true,
            labelString: ylabel
          },
          ticks: {
            precision: 0
          }
        }
      ]
    },
    series: {
      pie: {
        show: true
      }
    },
    maintainAspectRatio: false
  };
  return opts;
};
