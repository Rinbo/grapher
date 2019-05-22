import React from "react";

const DatasetInputter = ({ inputs, setInputs, dataSeriesIndex }) => {
  const renderInputs = () => {
    return inputs[dataSeriesIndex].map((input, index) => {
      return (
        <div
          className="ui input"
          style={{ marginTop: 5, display: "block" }}
          key={index}
        >
          <input
            value={input}
            onChange={e => {
              const newState = [...inputs];
              newState[dataSeriesIndex][index] = parseInt(e.target.value);
              setInputs(newState);
            }}
          />
        </div>
      );
    });
  };
  return <div style={{ marginTop: 20 }}>{renderInputs()}</div>;
};

export default DatasetInputter;
