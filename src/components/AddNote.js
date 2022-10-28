const AddNote = () => {
    return (
      <div className="note new">
        <textarea 
          rows="8" 
          cols="10" 
          placeholder="Напиши что-нибудь ;)">

        </textarea>
        <div className="note-footer">
            <small>Осталось 200 симолов</small>
            <button className="save">Сохранить</button>
        </div>
      </div>
    )
};

export default AddNote;