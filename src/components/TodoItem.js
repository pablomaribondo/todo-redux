import { useState } from "react";
import { useDispatch } from "react-redux";

import { deleteTodo, updateTodo } from "../redux/actions";

const TodoItem = ({ todo }) => {
  const [editable, setEditable] = useState(false);
  const [name, setName] = useState(todo.name);

  const dispatch = useDispatch();

  const onEditClickHandler = () => {
    dispatch(updateTodo({ ...todo, name }));

    setEditable(!editable);
  };

  return (
    <div>
      <div className="row mx-2 align-items-center">
        <div>#{todo.id.length > 1 ? todo.id[2] : todo.id}</div>
        <div className="col">
          {editable ? (
            <input
              type="text"
              className="form-control"
              onChange={({ target: { value } }) => setName(value)}
              value={name}
            />
          ) : (
            <h4>{todo.name}</h4>
          )}
        </div>
        <button className="btn btn-primary m-2" onClick={onEditClickHandler}>
          {editable ? "Update" : "Edit"}
        </button>
        <button
          className="btn btn-danger m-2"
          onClick={() => dispatch(deleteTodo(todo.id))}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
