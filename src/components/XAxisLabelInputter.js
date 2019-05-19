import React from "react";

const XAxisLabelInputter = ({ labels, setLabels }) => {
  const renderInputs = () => {
    return labels.map((label, index) => {
      return (
        <div
          className="ui input"
          style={{ marginTop: 5, display: "block" }}
          key={index}
        >
          <input
            value={label}
            onChange={e => {
              const newState = [...labels];
              newState[index] = e.target.value;
              setLabels(newState);
            }}
          />
        </div>
      );
    });
  };
  return <div style={{ marginTop: 20 }}>{renderInputs()}</div>;
};

export default XAxisLabelInputter;
