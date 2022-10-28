import React, { useState }  from 'react';
import uniqid from 'uniqid';
import './App.css';
import NotesList from './components/NotesList';
import Search from './components/Search';

function App() {

  const [notes, setNotes] = useState([]);
  const [searchText, setSearchText] = useState('');

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: uniqid(),
      text: text,
      date: date.toLocaleDateString(),
    };

    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  return (
    <div className="container">
      <Search handleSeaechNote={setSearchText} />
      <NotesList 
        notes={notes} 
        handleAddNote={addNote}
        handleDeleteNote={deleteNote} />
    </div>
  );
}

export default App;
