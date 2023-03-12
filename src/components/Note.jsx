import React from "react";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Note({ handleClose, onAddNotes, title, setTitle, body, setBody }) {

  return (
    <div>
      <Modal.Header closeButton>
        <Col>
          <Form.Control
            size="lg"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Col>{" "}
      </Modal.Header>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Control
            as="textarea"
            rows={10}
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </Form.Group>
      </Form>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="secondary" onClick={onAddNotes} disabled={title === "" && body === ""}>
          Save Changes
        </Button>
      </Modal.Footer>
    </div>
  );
}

export default Note;
