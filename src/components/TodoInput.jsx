import PropTypes from "prop-types";

TodoInput.propTypes = {
  handleAddTodos: PropTypes.func,
  todoValue: PropTypes.string,
  setTodoValue: PropTypes.func,
};

export default function TodoInput(props) {
  const { handleAddTodos, todoValue, setTodoValue } = props;
  return (
    <header>
      <input
        value={todoValue}
        onChange={(e) => {
          setTodoValue(e.target.value);
        }}
        placeholder="Enter todo..."
      />
      <button
        onClick={() => {
          handleAddTodos(todoValue);
          setTodoValue("");
        }}
      >
        Add
      </button>
    </header>
  );
}
