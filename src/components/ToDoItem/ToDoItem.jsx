import React from "react";

// CSS
import "./ToDoItem.css";

// function ToDoItem({todo}) does the same thing as below

function ToDoItem(props) {
    const { todo, completeToDo, removeToDo, index} = props;

    return (
    <div className={`todo ${todo.isComplete ? "complete" : ""}`}>
        {todo.text}
        <button onClick={() => completeToDo(index)}>Complete</button>
        <button onClick={() => removeToDo(index)}>x</button>
    </div>
    );
}

export default ToDoItem