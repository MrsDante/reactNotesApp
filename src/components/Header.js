import React from "react";

const Header = ({ handleToggleDarkMode }) => {

  return (
    <div className="header">
      <h1>Заметки</h1>
      <button onClick={() => handleToggleDarkMode((previousDarkMode) => !previousDarkMode)} className="save">Изменить тему</button>
    </div>
  );

}

export default Header;