import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to the Face Recognition Attendance System</h1>
      <nav>
        <ul>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/recognize">Recognize Face</Link>
          </li>
          <li>
            <Link to="/signup">Signup</Link>
          </li>
          <li>
            <Link to="/generate-token">Generate Token</Link>
          </li>
          <li>
            <Link to="/attendance/download-csv">Download CSV</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default HomePage;
