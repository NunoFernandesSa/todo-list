// --- React ---
import { useState } from "react";

// --- Components ---
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

/**
 * @returns {JSX.Element}
 * @description Main App component
 * @author {Nuno F}
 * @version {1.0.0}
 * @since {2024-01-01}
 * @param {Object} props - The component props
 * @param {Array} props.todos - The list of todos
 * @param {Function} props.setTodos - The function to set the list of todos
 * @param {String} props.todoValue - The value of the todo input
 * @param {Function} props.setTodoValue - The function to set the value of the todo input
 * @param {Function} props.handleAddTodos - The function to add a todo
 * @param {Function} props.handleDeleteTodo - The function to delete a todo
 * @param {Function} props.handleEditTodo - The function to edit a todo
 */
function App() {
  const [todos, setTodos] = useState([]);
  const [todoValue, setTodoValue] = useState("");

  //
  // --- Functions ---
  //
  function handleAddTodos(newTodo) {
    const newTodoList = [...todos, newTodo];

    if (newTodo.length > 0) {
      setTodos(newTodoList);
      setTodos(newTodoList);
    }
  }

  function handleDeleteTodo(index) {
    const newTodoList = todos.filter((todo, todoIndex) => {
      return todoIndex !== index;
    });
    setTodos(newTodoList);
  }

  function handleEditTodo(index) {
    const valueToBeEdited = todos[index];
    setTodoValue(valueToBeEdited);
    handleDeleteTodo(index);
  }
  //
  // --- end Functions ---
  //

  return (
    <>
      <h1>My Todo List</h1>

      <TodoInput
        todoValue={todoValue}
        setTodoValue={setTodoValue}
        handleAddTodos={handleAddTodos}
      />
      <TodoList
        handleEditTodo={handleEditTodo}
        handleDeleteTodo={handleDeleteTodo}
        todos={todos}
      />
    </>
  );
}

export default App;
