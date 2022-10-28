import { DeleteForeverSVGIcon } from "react-md";

const Note = ({ id, text, date, handleDeleteNote }) => {
  return (
    <div key={id} className="note">
        <span>{text}</span>
        <div className="note-footer">
          <small>{date}</small>
          <DeleteForeverSVGIcon 
            className="delete-icon"
            onClick={() => handleDeleteNote(id)} />
        </div>
    </div>
  )
};

export default Note;