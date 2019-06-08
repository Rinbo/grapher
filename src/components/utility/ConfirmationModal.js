import React, {useState} from "react";
import { Button, Header, Modal, Icon } from "semantic-ui-react";

const ConfirmationModal = ({ onSubmit, prompt, buttonName, floated=null }) => {
  const [show, setShow] = useState(false);

  return (
    <Modal
      trigger={
        <Button
          basic
          inverted
          color="green"
          style={{ width: 130, marginTop: 15, marginBottom: 20 }}
          floated={floated}
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
      <Header icon="archive" content="Are you sure?" />
      <Modal.Content>
        <p>{prompt}</p>
      </Modal.Content>
      <Modal.Actions>
        <Button basic color="red" inverted onClick={() => setShow(false)}>
          <Icon name="remove" /> No
        </Button>
        <Button
          color="green"
          inverted
          form="dataForm"
          type="submit"
          onClick={onSubmit}
        >
          <Icon name="checkmark" /> Yes
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default ConfirmationModal;
