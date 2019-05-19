import React, { useState } from "react";
import { Button, Header, Modal } from "semantic-ui-react";
import LabelInputter from "../LabelInputter";

const SettingsModal = ({ setLabels, labels, content, title, buttonName }) => {
  const [show, setShow] = useState(false);
  return (
    <Modal
      trigger={
        <Button          
          basic
          color={"black"}
          style={{ width: 200, marginTop: 15 }}
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
      <Header icon="edit" content={title} />
      <Modal.Content>
        <p>{content}</p>
        <LabelInputter labels={labels} setLabels={setLabels} />
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
