import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [msg, setMsg] = useState('');

  useEffect(() => {
    axios
      .get('/api/hello')
      .then(res => {
        setMsg(res.data.message)
      });
  });

  return (
    <div>
      Message: {msg}
    </div>
  );
}

export default App;
