import React from "react";
import { Button } from "semantic-ui-react";

const XAxisLabelInputter = ({ labels, setLabels, addDataPoints }) => {
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
    <div style={{ borderRight: "solid 1px #cccccc" }}>
      <div className="ui input">
        <input
          value="X-LABELS"
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
        style={{ marginTop: 10 }}
        basic
        size="tiny"
        inverted
        color="green"
        onClick={e => addDataPoints(e)}
      >
        Add row
      </Button>
    </div>
  );
};

export default XAxisLabelInputter;
