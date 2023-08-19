import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);
  function addNote(noteitem) {
    setNotes([...notes, noteitem]);
  }
  function ondelete(noteid) {
    setNotes(
      notes.filter((note, index) => {
        return index !== noteid;
      })
    );
  }
  return (
    <div>
      <Header />
      <CreateArea addNote={addNote} />
      {notes.map((note, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={note.title}
            content={note.content}
            ondelete={ondelete}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
