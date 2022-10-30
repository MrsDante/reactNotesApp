import React, { useState }  from 'react';
import uniqid from 'uniqid';
import './App.css';
import Header from './components/Header';
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
      <Header />
      <Search handleSeaechNote={setSearchText} />
      <NotesList 
        notes={notes.filter((note) => note.text.toLowerCase().includes(searchText))} 
        handleAddNote={addNote}
        handleDeleteNote={deleteNote} />
    </div>
  );
}

export default App;
