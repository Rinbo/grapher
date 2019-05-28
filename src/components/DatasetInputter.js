import React from "react";
import { Button } from "semantic-ui-react";

const DatasetInputter = ({
  inputs,
  setInputs,
  dataSeriesIndex,
  removeSetName
}) => {
  const renderInputs = () => {
    return inputs[dataSeriesIndex].map((input, index) => {
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
              newState[dataSeriesIndex][index] = parseInt(e.target.value);
              setInputs(newState);
            }}
          />
        </div>
      );
    });
  };

  const removeSet = e => {
    e.preventDefault();
    const newState = inputs.filter(e => e !== inputs[dataSeriesIndex]);
    setInputs(newState);
    removeSetName(dataSeriesIndex);
  };

  return (
    <div style={{ marginTop: 20 }}>
      {renderInputs()}
      <Button
        style={{ marginTop: 10 }}
        basic
        size="tiny"
        icon="trash"
        onClick={e => removeSet(e)}
      />
    </div>
  );
};

export default DatasetInputter;
