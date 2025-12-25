import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Todos() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(res => res.json())
      .then(data => {
        setTodos(data.slice(0, 10));
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    navigate('/login');
  };

  if (loading) {
    return (
      <div className="page-container">
        <div className="loading">Loading todos...</div>
      </div>
    );
  }

  return (
    <div className="page-container">
      <div className="todos-header">
        <h1>My Todos</h1>
        <button onClick={handleLogout} className="btn btn-danger">
          Logout
        </button>
      </div>
      
      <div className="todos-list">
        {todos.map(todo => (
          <Link
            key={todo.id}
            to={`/todos/${todo.id}`}
            className="todo-item"
          >
            <div className="todo-content">
              <div className={`checkbox ${todo.completed ? 'checked' : ''}`}>
                {todo.completed && '✓'}
              </div>
              
              <div className="todo-text">
                <p className={todo.completed ? 'completed' : ''}>
                  {todo.title}
                </p>
                <span className="todo-id">Todo #{todo.id}</span>
              </div>
              
              <span className="arrow">→</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Todos;