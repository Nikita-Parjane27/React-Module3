import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import todoService from '../api/todoService';

function TodoDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [todo, setTodo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTodo = async () => {
      try {
        setLoading(true);
        const data = await todoService.getTodoById(id);
        setTodo(data);
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTodo();
  }, [id]);

  if (loading) {
    return (
      <div className="loading-container">
        <p>Loading todo details...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <p>Error: {error}</p>
        <button onClick={() => navigate('/')}>Back to List</button>
      </div>
    );
  }

  return (
    <div className="todo-details-container">
      <button onClick={() => navigate('/')} className="back-button">
        ← Back to List
      </button>

      <div className="todo-details-card">
        <h1>Todo Details</h1>
        
        <div className="detail-section">
          <label>ID:</label>
          <p>#{todo.id}</p>
        </div>

        <div className="detail-section">
          <label>User ID:</label>
          <p>{todo.userId}</p>
        </div>

        <div className="detail-section">
          <label>Title:</label>
          <p>{todo.title}</p>
        </div>

        <div className="detail-section">
          <label>Status:</label>
          <p className={todo.completed ? 'status-completed' : 'status-pending'}>
            {todo.completed ? ' Completed' : ' Pending'}
          </p>
        </div>
      </div>
    </div>
  );
}

export default TodoDetails;