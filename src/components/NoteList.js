import React, { useContext, useState } from 'react';
import { NoteContext } from './NoteContext';
import AddNoteModal from './AddNoteModal';

const NoteList = () => {
  const { notes, deleteNote } = useContext(NoteContext);
  const [editNote, setEditNote] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const handleDelete = (index) => {
    deleteNote(index);
  };

  const handleEdit = (note) => {
    setEditNote(note);
  };

  // Filter notes based on search term
  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalNotes = notes.length;
  const shownNotes = filteredNotes.length;

  return (
    <div>
      <h2>Notes List</h2>
      
      <p>Total Notes: {totalNotes}</p>
      <p>Notes Shown: {shownNotes}</p>
      {filteredNotes.length > 0 ? (
        <ul>
          {filteredNotes.map((note, index) => (
            <li key={index}>
              <h3>{note.title}</h3>
              <p>{note.description}</p>
              <button onClick={() => handleDelete(index)}>Delete</button>
              <button onClick={() => handleEdit(note)}>Edit</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No notes found.</p>
      )}
      {editNote && (
        <AddNoteModal
          handleClose={() => setEditNote(null)}
          noteToEdit={editNote}
        />
      )}
    </div>
  );
};

export default NoteList;
