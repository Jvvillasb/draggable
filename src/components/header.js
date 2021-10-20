import React from "react";

export default function Header({ handleSubmit }) {
  return (
    <div className='header'>
      <button onClick={handleSubmit} className='addButton'>
        Add Note
      </button>
      <p>Notes</p>
    </div>
  );
}
