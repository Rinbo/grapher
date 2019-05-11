import React, { useState } from "react";

const GraphContainer = () => {
  const [inputsCount, setInputCount] = useState([null, null, null]);

  const renderInputs = () => {
    return inputsCount.map((e, index) => {
      return (
        <div className="ui input" style={{ marginTop: 5, display: "block" }}>
          <input key={index} value={e} placeholder="0" />
        </div>
      );
    });
  };

  return (
    <div className="ui container">
      <div className="ui centered header" style={{ paddingTop: 30 }}>
        Grapher
      </div>
      <div style={{ marginTop: 20 }}>{renderInputs()}</div>
      <div style={{ marginTop: 10 }}>
        <button
          className="ui basic tiny black button"
          onClick={() => setInputCount(prevState => [...prevState, null])}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default GraphContainer;
