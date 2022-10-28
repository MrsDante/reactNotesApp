import { DeleteForeverSVGIcon } from "react-md";

const Note = () => {
  return (
    <div className="note">
        <span>Hello</span>
        <div className="note-footer">
          <small>12/34</small>
          <DeleteForeverSVGIcon className="delete-icon" size="0.3em"  />
        </div>
    </div>
  )
};

export default Note;