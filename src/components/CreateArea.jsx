import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  const rows = note.content === "" ? 1 : 3;

  function handleChange(event) {
    const newValue = event.target.value;
    event.target.name === "title" ? setNote({title: newValue, content: note.content}) : setNote({title: note.title, content: newValue});
  }

  return (
    <div>
      <form className="create-note">
        <input onChange={handleChange} name="title" value={note.title} placeholder="Title" style={{display: note.content === "" ? "none" : "block"}}/>
        <textarea onChange={handleChange} name="content" value={note.content} placeholder="Take a note..." rows={rows} />
        <Zoom in={note.content === "" ? false : true}>
        <Fab type="button" onClick={() => {
          props.addNote(note);
          setNote({
            title: "",
            content: ""
          });
        }}><AddIcon /></Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
