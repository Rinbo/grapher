import React from "react";
import { Button } from "semantic-ui-react";

const XAxisLabelInputter = ({
  labels,
  setLabels,
  addDataPoints,
  removeDataPoints
}) => {
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
  return (
    <div style={{ marginBottom: 15 }} className="showBorder">
      <div className="ui input">
        <input
          value="LABELS"
          style={{
            textAlign: "center",
            fontWeight: "bold",
            border: "0px"
          }}
          disabled
        />
      </div>
      <div style={{ marginTop: 20 }}>{renderInputs()}</div>
      <Button
        style={{ marginTop: 10, width: 90, paddingLeft: 10, paddingRight:10 }}
        basic
        type="button"
        size="tiny"
        inverted
        color="green"
        onClick={e => addDataPoints(e)}
      >
        Add row
      </Button>
      <Button
        style={{ marginTop: 10, width: 90, paddingLeft: 10, paddingRight:10 }}
        basic
        size="tiny"
        inverted
        color="red"
        type="button"
        onClick={e => removeDataPoints()}
      >
        Remove row
      </Button>
    </div>
  );
};

export default XAxisLabelInputter;
