import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Note from "./Note";

function Navbar({ onAddNotes, title, setTitle, body, setBody , show, handleClose, handleShow}) {

  return (
    <>
      <div className="navbar">
        <h1 className="notepad">Notepad</h1>
        <Button onClick={handleShow} className="addNote">
          Add
        </Button>
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        animation={false}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Note
          handleClose={handleClose}
          onAddNotes={onAddNotes}
          title={title}
          setTitle={setTitle}
          body={body}
          setBody={setBody}
        />
      </Modal>
    </>
  );
}

export default Navbar;
