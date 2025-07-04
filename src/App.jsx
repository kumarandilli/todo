import React, { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (input.trim() === "") return;
    setTodos([...todos, input]);
    setInput("");
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div className="container">
      <h1 className="heading"> MY To-Do LIST </h1>
      <div className="inputContainer">
        <input
          type="text"
          placeholder="Enter a new task..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={addTodo}>Add</button>
      </div>
      <ul className="todoList">
        {todos.map((todo, index) => (
          <li key={index} className="todoItem">
            {todo}
            <button className="deleteButton" onClick={() => deleteTodo(index)}>
              ✕
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

// import React,{useState} from 'react'
// import  './App.css';

// export const App = () => {
         
  
//   return (

//     <>
//     <div className="container"> 
//       <h1 className="heading"> MY TODO LIST </h1></div>
//       <div className="inputContainer">
//       <input type="text" placeholder = "Enter the task...." value={input}/>
//       </div>
//     </>
//   )
// }
