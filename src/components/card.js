import React from "react";
import Draggable from "react-draggable";
export default function Card({ currentNote, notes, addNote }) {
return (
   <Draggable grid={[10, 10]} axis='both' bounds='parent'>
     <div className='card' key={currentNote.id}>
      <div className='heading'>
        <h3>{currentNote.name && currentNote.name}</h3>
        <img
           onClick={() => {
           const newNoteList = notes.filter((item) => {
           if (item.id != currentNote.id) {
               return item;
           }
           });
             addNote(newNoteList);
           }}
            src='https://toppng.com/uploads/preview/recycling-bin-vector-delete-icon-png-black-11563002079w1isxqyyiv.png'
            style={{ height: "20px", width: "20px" }}
         />
      </div>
        <p>{currentNote.description}</p>
      </div> 
    </Draggable>
  );
}