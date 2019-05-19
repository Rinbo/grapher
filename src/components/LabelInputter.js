import React from "react";

const LabelInputter = ({ labels, setLabels }) => {
  const renderLabels = () => {
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

  return renderLabels();
};

export default LabelInputter;
