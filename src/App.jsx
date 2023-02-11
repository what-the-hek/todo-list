import React, { useState } from "react";

// components
import ToDoForm from "./components/ToDoForm/ToDoForm";
import ToDoItem from "./components/ToDoItem/ToDoItem";

// CSS
import "./App.css";

// state
function App() {
  const [todos, setTodos] = useState([
    {text: "Do this", isComplete: false},
    {text: "Do that", isComplete: false},
    {text: "Something else", isComplete: false},
  ]);

  // Actions
  // the ... means expand the array into the existing array (add the individual items) rather than insert the array into it
  const addTodo = (text) => {
    const newTodos = [...todos, {text: text, isComplete: false}];
    setTodos(newTodos);
  };

// .map is like 'foreach' but returns a brand new thing

const completeToDo = (index) => {
  const newTodos = [...todos];
  newTodos[index].isComplete = true;
  console.log(todos)
  setTodos(newTodos);
}

const removeToDo = (index) => {
  const newTodos = [...todos];
  newTodos.splice(index, 1);
  setTodos(newTodos);
}

  return (
  <div className="app">
    <div className="todo-list">
    <h1>ToDo List</h1>
    {todos.map((todo, index) => (
      <ToDoItem 
      key={index} 
      todo={todo} 
      index={index} 
      completeToDo={completeToDo} 
      removeToDo={removeToDo}/>
    ))}
    <ToDoForm addTodo={addTodo}/>
  </div>
  </div>
  );
}

export default App;