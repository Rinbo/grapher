import React, { useState } from "react";
import { Button, Header, Modal } from "semantic-ui-react";
import AxisNames from "../AxisNames";

const SettingsModal = ({
  setAxisNames,
  axisNames,
  title,
  setTitle,
  content,
  modalTitle,
  buttonName
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
