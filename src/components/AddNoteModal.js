// AddNoteModal.js
import React, { useState, useContext } from 'react';
import { NoteContext } from './NoteContext';

const AddNoteModal = ({ handleClose, noteToEdit }) => {
  const [title, setTitle] = useState(noteToEdit ? noteToEdit.title : '');
  const [description, setDescription] = useState(noteToEdit ? noteToEdit.description : '');
  const { addNote, updateNote } = useContext(NoteContext);

  const handleAction = () => {
    if (noteToEdit) {
      updateNote({
        id: noteToEdit.id,
        title,
        description
      });
    } else {
      addNote({
        title,
        description
      });
    }
    handleClose();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
        <button onClick={handleAction}>{noteToEdit ? 'Update' : 'Add'}</button>
        <button onClick={handleClose}>Close</button>
      </div>
    </div>
  );
};

export default AddNoteModal;
