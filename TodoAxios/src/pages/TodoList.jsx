import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import todoService from '../api/todoService';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        setLoading(true);
        const data = await todoService.getTodos();
        setTodos(data);
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTodos();
  }, []);

  if (loading) {
    return (
      <div className="loading-container">
        <p>Loading todos...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <p>Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="todo-list-container">
      <h1>Todo List</h1>
      <div className="todo-list">
        {todos.map((todo) => (
          <Link
            key={todo.id}
            to={`/todo/${todo.id}`}
            className="todo-item"
          >
            <div className="todo-content">
              <span className="todo-id">#{todo.id}</span>
              <span className={`todo-title ${todo.completed ? 'completed' : ''}`}>
                {todo.title}
              </span>
            </div>
            <span className={`todo-status ${todo.completed ? 'completed' : 'pending'}`}>
              {todo.completed ? 'Completed' : 'Pending'}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default TodoList;