import PropTypes from "prop-types";
import TodoCard from "./TodoCard";

export default function TodoList(props) {
  const todos = props.todos;

  return (
    <div>
      <ul className="main">
        {todos.map((todo, todoIndex) => {
          return (
            <TodoCard key={todoIndex}>
              <p>{todo}</p>
            </TodoCard>
          );
        })}
      </ul>
    </div>
  );
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
};
