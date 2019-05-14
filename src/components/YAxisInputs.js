import React, { Fragment } from "react";

const YAxisInputs = ({ inputs, setInputs }) => {
  const renderInputs = () => {
    return inputs.map((input, index) => {
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
              newState[index] = e.target.value;
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
            const newState = [...inputs, 0];
            setInputs(newState);
          }}
        >
          +
        </button>
      </div>
    </Fragment>
  );
};

export default YAxisInputs;
