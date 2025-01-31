import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const GetCSVPage = () => {
  const [error, setError] = useState('');
  const [fileUrl, setFileUrl] = useState('');

  const handleDownload = async () => {
    try {
      const response = await axios.get('https://python-task3-production.up.railway.app/attendance/download-csv', {
        responseType: 'blob',
      });

      // Create a link to download the file
      const url = window.URL.createObjectURL(new Blob([response.data]));
      setFileUrl(url);
    } catch (err) {
      setError('Error downloading CSV');
    }
  };

  return (
    <div>
      <h1>Download Attendance CSV</h1>
      {error && <p>{error}</p>}
      {fileUrl && (
        <a href={fileUrl} download="attendance.csv">
          Click to download CSV
        </a>
      )}
      <button onClick={handleDownload}>Download CSV</button>
    </div>
  );
};

export default GetCSVPage;
