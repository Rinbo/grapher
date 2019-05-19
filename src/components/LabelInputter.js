import React from "react";

const AXIS_NAMES = ["X-axis", "Y-axis"];

const LabelInputter = ({ labels, setLabels }) => {
  const renderLabels = () => {
    return labels.map((label, index) => {
      return (
        <div className="ui form inverted">
          <div
            className="field"
            style={{ marginTop: 5, display: "block" }}
            key={index}
          >
            <label>{AXIS_NAMES[index]}</label>
            <input
              value={label}
              onChange={e => {
                const newState = [...labels];
                newState[index] = e.target.value;
                setLabels(newState);
              }}
            />
          </div>
        </div>
      );
    });
  };

  return renderLabels();
};

export default LabelInputter;
