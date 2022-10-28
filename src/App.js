import React, { useState }  from 'react';
import { nanoid } from 'nanoid';
import './App.css';
import NotesList from './components/NotesList';

function App() {

  const [notes, setNotes] = useState([
    {
    id: nanoid(),
    text: 'Hello there',
    date: '11/11/22',
    },
    {
      id: nanoid(),
      text: 'Hello there 2',
      date: '12/11/22',
      },
      {
        id: nanoid(),
        text: 'Hello there 3',
        date: '13/11/22',
        },

]);

  return (
    <div className="container">
      <NotesList notes={notes} />
    </div>
  );
}

export default App;
