// App.js
import React, { useState } from 'react';
import Search from './components/Search';
import AddNoteModal from './components/AddNoteModal';
import NoteList from './components/NoteList';
import { NoteProvider } from './components/NoteContext';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [noteToEdit, setNoteToEdit] = useState(null);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleAddNote = () => {
    setNoteToEdit(null);
    setShowModal(true);
  };

  const handleEditNote = (note) => {
    setNoteToEdit(note);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <NoteProvider>
      <div>
        <Search handleSearch={handleSearch} />
        <button onClick={handleAddNote}>Add Notes</button>
        <NoteList searchTerm={searchTerm} handleEditNote={handleEditNote} />
        {showModal && <AddNoteModal handleClose={handleCloseModal} noteToEdit={noteToEdit} />}
      </div>
    </NoteProvider>
  );
};

export default App;
