import React, { useState } from 'react';
import './App.css';

function App() {
  const [text, setText] = useState('');

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <main className="main-container">
      {/* --- Input Card --- */}
      <div className="card input-card">
        <h1>✏️ Dynamic Text Display</h1>
        <p className="subtitle"><i>Type in the box below to see the live output.</i></p>
        <div className="input-wrapper">
          <textarea
            type="text"
            value={text}
            onChange={handleChange}
            placeholder="What's on your mind?"
          />
        </div>
      </div>

      {/* --- Output Card (Appears when there is text) --- */}
      {text && (
        <div className="card output-card">
          <h2>Live Output</h2>
          <p className="output-text">{text}</p>
        </div>
      )}
    </main>
  );
}

export default App;