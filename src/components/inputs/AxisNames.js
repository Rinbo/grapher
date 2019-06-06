import React from "react";

const AXIS_NAMES = ["X-axis", "Y-axis"];

const AxisNames = ({ axisNames, setAxisNames }) => {
  const renderLabels = () => {
    return axisNames.map((name, index) => {
      return (
        <div className="ui form inverted" key={index}>
          <div className="field" style={{ marginTop: 5, display: "block" }}>
            <label>{AXIS_NAMES[index]}</label>
            <input
              value={name}
              onChange={e => {
                const newState = [...axisNames];
                newState[index] = e.target.value;
                setAxisNames(newState);
              }}
            />
          </div>
        </div>
      );
    });
  };

  return renderLabels();
};

export default AxisNames;
