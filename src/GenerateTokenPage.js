import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const GenerateTokenPage = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://python-task3-production.up.railway.app/api/token/', { name, password });
      setToken(response.data.access_token);
    } catch (err) {
      setError('Error generating token');
    }
  };

  return (
    <div>
      <h1>Generate Token</h1>
      {error && <p>{error}</p>}
      {token && <p>Token: {token}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Generate Token</button>
      </form>
    </div>
  );
};

export default GenerateTokenPage;
