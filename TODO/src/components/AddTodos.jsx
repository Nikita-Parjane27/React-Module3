import { useContext, useState } from "react";
import { TodoContext } from "../context/TodoContext";

const AddTodo = () => {
  const { addTodo } = useContext(TodoContext);
  const [title, setTitle] = useState("");

  const handleAdd = () => {
    if (title.trim() === "") return;
    addTodo(title);
    setTitle("");
  };

  return (
    <>
      <input
        type="text"
        placeholder="Enter todo"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
    </>
  );
};

export default AddTodo;
