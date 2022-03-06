import React from 'react';
import './CreateTodoButton.css';



function CreateTodoButton(props) {
  
const clickboton = (msg) => {
  alert(msg)
}
  return (
    <button className="CreateTodoButton" onClick={() => clickboton("d")}>+</button>
  );
}

export { CreateTodoButton };
