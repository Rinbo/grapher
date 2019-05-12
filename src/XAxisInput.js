import React, { Fragment, useState } from "react";

const XAxisInput = () => {
  const [inputs, setInputs] = useState([null, null, null]);

  const renderInputs = () => {
    // TODO: Figure out how to make onChange function update the value at the correct index
    return inputs.map((e, index) => {
      return (
        <div className="ui input" style={{ marginTop: 5, display: "block" }}>
          <input key={index} value={e} placeholder="0" />
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
          onClick={() => setInputs(prevState => [...prevState, null])}
        >
          +
        </button>
      </div>
    </Fragment>
  );
};

export default XAxisInput;
