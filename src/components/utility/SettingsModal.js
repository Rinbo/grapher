import React, { useState } from "react";
import { Button, Header, Modal, Dropdown } from "semantic-ui-react";
import { colorOptions, graphOptions } from "./settingsOptions";
import AxisNames from "../inputs/AxisNames";

const SettingsModal = ({
  setAxisNames,
  axisNames,
  title,
  setTitle,
  content,
  modalTitle,
  buttonName,
  setUserOptions,
  userOptions
}) => {
  const [show, setShow] = useState(false);

  const renderGraphTitle = () => {
    return (
      <div className="ui inverted form">
        <div className="field">
          <label>Title</label>
          <input value={title} onChange={e => setTitle(e.target.value)} />
        </div>
      </div>
    );
  };

  const toggleFillColor = () => (
    <div>
      <label style={{ color: "#cccccc", display: "block", marginBottom: 10 }}>
        Show fill color
      </label>
      <label className="switch">
        <input
          checked={userOptions.fillColor}
          type="checkbox"
          onChange={() => {
            setUserOptions(prevState => {
              return { ...prevState, fillColor: !prevState.fillColor };
            });
          }}
        />
        <span className="slider round" />
      </label>
    </div>
  );

  const selectColor = (e, color) => {
    setUserOptions(prevState => {
      return { ...prevState, color: color.value };
    });
  };

  const selectGraphType = (e, data) => {
    e.preventDefault();
    setUserOptions(prevState => {
      return { ...prevState, graphType: data.value };
    });
  };

  const renderLineGraphSettings = () => {
    if (userOptions.graphType === "line") {
      return (
        <>
          <AxisNames axisNames={axisNames} setAxisNames={setAxisNames} />
          <div className="ui field" style={{ marginTop: 15 }}>
            {toggleFillColor()}
          </div>
          <div style={{ marginTop: 15 }}>
            <label
              style={{ color: "#cccccc", display: "block", marginBottom: 10 }}
            >
              Choose a color theme
            </label>
            <Dropdown
              placeholder="Colors"
              selection
              options={colorOptions}
              onChange={selectColor}
            />
          </div>
        </>
      );
    } else {
      return null;
    }
  };

  return (
    <Modal
      trigger={
        <Button
          basic
          inverted
          color="green"
          style={{ width: 130, marginTop: 15, marginBottom: 20 }}
          onClick={() => setShow(true)}
        >
          {buttonName}
        </Button>
      }
      open={show}
      onClose={() => setShow(false)}
      basic
      size="small"
    >
      <Header icon="edit" content={modalTitle} />
      <Modal.Content>
        <p>{content}</p>
        {renderGraphTitle()}
        <div style={{ marginBottom: 15, marginTop: 15 }}>
          <Button.Group basic inverted color="green">
            <Button>Graph Type</Button>
            <Dropdown
              className="button icon"
              placeholder="Graph Type"
              floating
              options={graphOptions}
              onChange={selectGraphType}
              trigger={<React.Fragment />}
            />
          </Button.Group>
        </div>
        {renderLineGraphSettings()}
      </Modal.Content>
      <Modal.Actions>
        <Button
          style={{ width: 100 }}
          inverted
          basic
          color="green"
          onClick={() => setShow(false)}
        >
          Done
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default SettingsModal;
