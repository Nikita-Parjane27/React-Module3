import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="page-container">
      <div className="card">
        <h1>Welcome to Home Page</h1>
        <p>Your todos management application</p>
        <Link to="/login" className="btn btn-primary">
          Go to Login
        </Link>
      </div>
    </div>
  );
}

export default Home;