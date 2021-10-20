import React from "react";
import Card from "../components/card";
export default function Complete({ notes, addNote }) {
  return (
    <>
     {notes.map((e) => (
         <Card currentNote={e} notes={notes} addNote={addNote} />
     ))}
    </>
   );
}