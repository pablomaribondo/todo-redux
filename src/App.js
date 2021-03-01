import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

import "bootstrap/dist/css/bootstrap.css";

const App = () => {
  return (
    <div className="text-center" style={{ width: "50%", margin: "3rem auto" }}>
      <TodoInput />
      <TodoList />
    </div>
  );
};

export default App;
