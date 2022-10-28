import { DeleteForeverSVGIcon } from "react-md";

const Note = ({ id, text, date }) => {
  return (
    <div key={id} className="note">
        <span>{text}</span>
        <div className="note-footer">
          <small>{date}</small>
          <DeleteForeverSVGIcon className="delete-icon" />
        </div>
    </div>
  )
};

export default Note;