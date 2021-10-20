import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function AddNoteForm({ setAddItem, addItem, notes, setNotes }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let newNote = {
      id: uuidv4(),
      name: name,
      description: description,
    };
    setNotes([...notes, newNote]);
    setAddItem(!addItem);
  };
  return (
    <div className='addForm'>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type='text'
          placeholder='Name'
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type='text'
          placeholder='Description'
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type='submit'>Add</button>
      </form>
    </div>
  );
}