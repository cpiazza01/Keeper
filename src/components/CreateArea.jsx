import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const newValue = event.target.value;
    event.target.name === "title" ? setNote({title: newValue, content: note.content}) : setNote({title: note.title, content: newValue});
  }

  return (
    <div>
      <form>
        <input onChange={handleChange} name="title" value={note.title} placeholder="Title" />
        <textarea onChange={handleChange} name="content" value={note.content} placeholder="Take a note..." rows="3" />
        <button type="button" onClick={() => {
          props.addNote(note);
          setNote({
            title: "",
            content: ""
          });
        }}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
