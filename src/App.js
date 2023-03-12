import { useState } from "react";
import List from "./components/List";
import "./App.css";
import Navbar from "./components/Navbar";
import uuid from "react-uuid";

function App() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [show, setShow] = useState(false);
  const [reminder, setReminder] = useState(true)
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [notes, setNotes] = useState([]);

  const onAddNotes = () => {
    const newNotes = {
      id: uuid(),
      title,
      body,
      reminder,
      lastModified: Date.now(),
    };
    setNotes([newNotes, ...notes]);
    setTitle("");
    setBody("");
    handleClose();
  };

  // Toggle Reminder

  const toggleReminder = (id) => {
    console.log(id)
  }

  // Delete list

  const deleteList = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };
  return (
    <div className="App">
      <Navbar
        onAddNotes={onAddNotes}
        title={title}
        setTitle={setTitle}
        body={body}
        show={show}
        setBody={setBody}
        handleClose={handleClose}
        handleShow={handleShow}
      />
      {notes.length > 0 ? (
        <List notes={notes} deleteList={deleteList} />
      ) : (
        <div className="empty">Write your notes and set your reminder for Overworld mint</div>
      )}
    </div>
  );
}

export default App;
