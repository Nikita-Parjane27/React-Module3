import { useState } from "react";
import { TodoContext } from "../context/TodoContext";
import AddTodo from "./AddTodos";
import TodoList from "./TodoList";

const Todos = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (title) => {
    setTodos([
      ...todos,
      {
        id: Date.now(),
        title
      }
    ]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo, deleteTodo }}>
      <AddTodo />
      <TodoList />
    </TodoContext.Provider>
  );
};

export default Todos;
