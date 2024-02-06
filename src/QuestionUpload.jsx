// src/Page1.jsx
import React from 'react';

export default function QuestionUpload() {
  return (
    <div>
      <h1>Question Upload</h1>
      {/* Add content specific to Page 1 here */}
    </div>
  );
}

/*
import React, { useState } from 'react';

export default function QuestionUpload() {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleFileUpload = async () => {
    const formData = new FormData();
    formData.append('excelFile', file);

    try {
      const response = await fetch('http://example.com/upload', {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();

      if (data.success) {
        // Check if the SQLite database is empty
        const isEmpty = // add code to check if SQLite database is empty
        if (isEmpty) {
          // Write data from the uploaded file to the SQLite database
          // Add code to write data to SQLite database
        }
      }
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  return (
    <div>
      <h1>Question Upload</h1>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleFileUpload}>Upload and Save to SQLite</button>
    </div>
  );
}

*/