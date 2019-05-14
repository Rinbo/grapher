import React from "react";

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
  return <div style={{ marginTop: 20 }}>{renderInputs()}</div>;
};

export default YAxisInputs;
