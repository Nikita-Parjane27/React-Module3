import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    
    if (email === 'admin@gmail.com' && password === 'admin@123') {
      localStorage.setItem('isLoggedIn', 'true');
      navigate('/todos');
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="page-container">
      <div className="card">
        <h1>Login</h1>
        
        <form onSubmit={handleLogin} className="form">
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@gmail.com"
              required
            />
          </div>
          
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="admin@123"
              required
            />
          </div>
          
          {error && (
            <div className="error-message">
              {error}
            </div>
          )}
          
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
        
        <div className="link-container">
          <Link to="/" className="link">Back to Home</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;