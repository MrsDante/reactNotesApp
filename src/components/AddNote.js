import { useState } from "react";

const AddNote = ({ handleAddNote }) => {
  const [noteText, setNoteText] = useState('');
  //const [charactersLeft, setCharactersLeft] = useState(200);
  const characterLimit = 200;
  //let charactersLeft = 0;

  const handleChange = (e) => {
    //setCharactersLeft(characterLimit - e.target.value.length);
    if (characterLimit - e.target.value.length >= 0) {
      setNoteText(e.target.value);
    } 
  };

  const handleSaveClick = () => {
    if (noteText.trim().length === 0) {
      alert('Пустая заметка? Зачем она нам?');
    } else {
      handleAddNote(noteText);
      setNoteText('');
    }
  };

    return (
      <div className="note new">
        <textarea 
          rows="8" 
          cols="10" 
          placeholder="Напиши что-нибудь ;)"
          onChange={handleChange}
          value={noteText}
          >
        </textarea>
        <div className="note-footer">
            <small>Осталось {characterLimit - noteText.length} симолов</small>
            <button 
              className="save"
              onClick={handleSaveClick}
            >Сохранить
            </button>
        </div>
      </div>
    )
};

export default AddNote;