import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(note) {
    setNotes(prevNotes => {
      return [...prevNotes, note]
    });
  }

  function deleteItem(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((note, index) => {
        return index !== id;
      });
    });
  }


  return (
    <div>
      <Header />
      <CreateArea addNote={addNote}/>
      {notes.map((note, index) => (
        <Note
        key={index}
        id={index}
        title={note.title}
        content={note.content}
        deleteItem={deleteItem}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
