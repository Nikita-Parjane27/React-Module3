import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function TodoDetails() {
  const { todoId } = useParams();
  const [todo, setTodo] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`)
      .then(res => res.json())
      .then(data => {
        setTodo(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, [todoId]);

  if (loading) {
    return (
      <div className="page-container">
        <div className="loading">Loading todo details...</div>
      </div>
    );
  }

  if (!todo) {
    return (
      <div className="page-container">
        <div className="error">Todo not found</div>
      </div>
    );
  }

  return (
    <div className="page-container">
      <button onClick={() => navigate('/todos')} className="back-btn">
        ← Back to Todos
      </button>
      
      <div className="card">
        <div className="details-header">
          <h1>Todo Details</h1>
        </div>
        
        <div className="details-content">
          <div className="detail-item">
            <label>Todo ID</label>
            <p className="detail-value">{todo.id}</p>
          </div>
          
          <div className="detail-item">
            <label>Title</label>
            <p className="detail-value">{todo.title}</p>
          </div>
          
          <div className="detail-item">
            <label>Status</label>
            <div className={`status-badge ${todo.completed ? 'completed' : 'pending'}`}>
              {todo.completed ? '✓ Completed' : '⏰ Not Completed'}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodoDetails;