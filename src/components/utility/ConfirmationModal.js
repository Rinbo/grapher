import React from "react";
import { Button, Header, Modal, Icon } from "semantic-ui-react";

const ConfirmationModal = ({ onSubmit }) => {
  return (
    <Modal
      trigger={
        <Button
          basic
          inverted
          color="green"
          style={{ width: 130, marginTop: 15, marginBottom: 20 }}
          floated="right"
        >
          Generate link
        </Button>
      }
      basic
      size="small"
    >
      <Header icon="archive" content="Are you sure?" />
      <Modal.Content>
        <p>Once you submit the graph data you wont't be able to edit it.</p>
      </Modal.Content>
      <Modal.Actions>
        <Button basic color="red" inverted>
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
