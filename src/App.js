import React, { useState } from 'react';
import './App.css';

function App() {
  const [htmlCode, setHtmlCode] = useState('');
  const [cssCode, setCssCode] = useState('');
  const [output, setOutput] = useState('');

  const handleRun = () => {
    const styledOutput = `
      <style>${cssCode}</style>
      ${htmlCode}
    `;
    setOutput(styledOutput);
  };

  return (
    <div className="app">
      <div className="editor">
        <h2>HTML & CSS Compiler</h2>
        <textarea
          value={htmlCode}
          onChange={(e) => setHtmlCode(e.target.value)}
          placeholder="Write your HTML here..."
          rows="10"
        />
        <textarea
          value={cssCode}
          onChange={(e) => setCssCode(e.target.value)}
          placeholder="Write your CSS here..."
          rows="10"
        />
        <button onClick={handleRun}>Run</button>
      </div>
      <div className="output">
        <h2>Output</h2>
        <div className="output-box" dangerouslySetInnerHTML={{ __html: output }} />
      </div>
    </div>
  );
}

export default App;
