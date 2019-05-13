import React, { Fragment, useState } from "react";

const XAxisInput = () => {
  const [inputs, setInputs] = useState([0, 0, 0]);

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
          onClick={() => setInputs(prevState => [...prevState, 0])}
        >
          +
        </button>
      </div>
    </Fragment>
  );
};

export default XAxisInput;
