import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const todos = useSelector(state => state);

  return (
    <div className="my-4">
      {Array.isArray(todos) &&
        todos.map(todo => <TodoItem key={todo.id} todo={todo} />)}
    </div>
  );
};

export default TodoList;
