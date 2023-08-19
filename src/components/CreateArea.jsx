import React, { useState } from "react";

function CreateArea({ addNote }) {
  const [text, setText] = useState({
    title: "",
    content: ""
  });

  function handleSubmit(e) {
    e.preventDefault();
    addNote(text);
  }
  function handleChange(e) {
    const { name, value } = e.target;
    setText({ ...text, [name]: value });
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          value={text.title}
          name="title"
          placeholder="Title"
        />
        <textarea
          onChange={handleChange}
          value={text.content}
          name="content"
          placeholder="Take a note..."
          rows="3"
        />
        <button>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
