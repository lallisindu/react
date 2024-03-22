import React, { createContext, useState } from 'react';

const NoteContext = createContext();

const NoteProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);

  const addNote = (note) => {
    setNotes([...notes, note]);
  };

  const deleteNote = (index) => {
    const newNotes = [...notes];
    newNotes.splice(index, 1);
    setNotes(newNotes);
  };

  const updateNote = (updatedNote) => {
    setNotes(notes.map(note => (note.id === updatedNote.id ? updatedNote : note)));
  };

  return (
    <NoteContext.Provider value={{ notes, setNotes , addNote, deleteNote, updateNote }}>
      {children}
    </NoteContext.Provider>
  );
};

export { NoteContext, NoteProvider };
