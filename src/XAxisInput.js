import React, { Fragment } from "react";

const XAxisInput = ({ inputs, setInputs, dataSeriesIndex }) => {
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
              newState[dataSeriesIndex][index] = e.target.value;
              setInputs(newState);
            }}
          />
        </div>
      );
    });
  };
  return (
    <Fragment>
      <div style={{ marginTop: 20 }}>{renderInputs()}</div>
      <div style={{ marginTop: 10 }}>
        <button
          className="ui basic tiny black button"
          onClick={e => {
            e.preventDefault();
            const newState = [...inputs];
            newState[dataSeriesIndex].push(0);
            setInputs(newState);
          }}
        >
          +
        </button>
      </div>
    </Fragment>
  );
};

export default XAxisInput;
