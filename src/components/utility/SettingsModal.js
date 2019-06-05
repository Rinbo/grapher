import React, { useState } from "react";
import { Button, Header, Modal, Radio } from "semantic-ui-react";
import AxisNames from "../AxisNames";

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
        <span class="slider round" />
      </label>
    </div>
  );

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
        <AxisNames axisNames={axisNames} setAxisNames={setAxisNames} />
        <div className="ui field" style={{ marginTop: 15 }}>
          {toggleFillColor()}
        </div>
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
