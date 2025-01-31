import React, { useState } from 'react';
import axios from 'axios';

const RecognizePage = () => {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [token, setToken] = useState('');  // Added token state

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);

    if (!token) {
      setError('Please enter a token');
      return;
    }

    try {
      const response = await axios.post('https://python-task3-production.up.railway.app/api/recognize/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${token}`,  // Using the user-provided token
        },
      });
      setMessage(response.data.message);
    } catch (err) {
      setError('Error recognizing face');
    }
  };

  return (
    <div>
      <h1>Recognize Face</h1>
      {error && <p>{error}</p>}
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Upload Face Image:</label>
          <input
            type="file"
            onChange={(e) => setFile(e.target.files[0])}
            accept="image/*"
            required
          />
        </div>
        <div>
          <label>Enter OAuth Token:</label>
          <input
            type="text"
            value={token}
            onChange={(e) => setToken(e.target.value)}
            required
          />
        </div>
        <button type="submit">Recognize Face</button>
      </form>
    </div>
  );
};

export default RecognizePage;
