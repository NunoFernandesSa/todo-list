import { useState } from "react";

import TodoList from "./components/TodoList";
import TodoInput from "./components/TodoInput";

import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (newTodo) => {
    const newTodosList = [...todos, newTodo];
    if (newTodo.length > 0) {
      setTodos(newTodosList);
    }
  };

  return (
    <>
      <h1>My Todo List</h1>
      <TodoInput handleAddTodo={handleAddTodo} />
      <TodoList todos={todos} />
    </>
  );
}

export default App;
