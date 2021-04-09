import { useState } from "react";
import { useDispatch } from "react-redux";
import { v1 as uuid } from "uuid";

import { addTodo } from "../redux/actions";

const TodoInput = () => {
  const [name, setName] = useState("");

  const dispatch = useDispatch();

  const onAddClickHandler = () => {
    dispatch(addTodo({ id: uuid(), name }));
    setName("");
  };

  return (
    <div>
      <div className="row m-2">
        <input
          type="text"
          className="col form-control"
          onChange={({ target: { value } }) => setName(value)}
          value={name}
        />
        <button className="btn btn-primary mx-2" onClick={onAddClickHandler}>
          Add
        </button>
      </div>
    </div>
  );
};

export default TodoInput;
