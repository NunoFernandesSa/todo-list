import PropTypes from "prop-types";
import { useState } from "react";

export default function TodoInput(props) {
  const { handleAddTodo } = props;
  const [todoValue, setTodoValue] = useState("");

  const handleChange = (e) => {
    setTodoValue(e.target.value);
  };

  return (
    <header>
      <div className="todo-input-container">
        <input
          type="text"
          placeholder="Add a new todo..."
          value={todoValue}
          onChange={handleChange}
        />
        <button
          onClick={() => {
            handleAddTodo(todoValue);
            setTodoValue("");
          }}
        >
          Add
        </button>
      </div>
    </header>
  );
}

TodoInput.propTypes = {
  handleAddTodo: PropTypes.func.isRequired,
};
