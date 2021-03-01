const teste = "ADD_TODO";

export const addTodo = todo => {
  return {
    type: teste,
    payload: todo,
  };
};
