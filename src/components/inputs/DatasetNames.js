import React from "react";

const DatasetNames = ({ names, setNames, index }) => {
  const renderNames = () => {
    return (
      <div className="ui input">
        <input
          style={{ textAlign: "center", fontWeight: "bold" }}
          value={names[index]}
          onChange={e => {
            const newState = [...names];
            newState[index] = e.target.value;
            setNames(newState);
          }}
        />
      </div>
    );
  };

  return renderNames();
};

export default DatasetNames;
