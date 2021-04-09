import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from "./actions";
import { todos } from "./states";

export const reducer = (state = todos, action) => {
  switch (action.type) {
    case ADD_TODO: {
      const newTodos = [...state];
      newTodos.push(action.payload);

      return newTodos;
    }
    case DELETE_TODO: {
      const newTodos = [...state].filter(todo => todo.id !== action.payload);

      return newTodos;
    }
    case UPDATE_TODO: {
      const newTodos = [...state];
      const index = newTodos.findIndex(todo => todo.id === action.payload.id);

      if (index !== -1) {
        newTodos[index] = action.payload;
      }

      return newTodos;
    }
    default:
      return state;
  }
};
