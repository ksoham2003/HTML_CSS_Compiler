import React, { useState } from 'react';
import './Simulation.css';

const examples = [
  {
    name: "Centered Text ",
    html: "<div class='centered'>Hello, World!</div>",
    css: ".centered { text-align: center; color: blue; font-size: 24px; }"
  },
  {
    name: "Styled Button ",
    html: "<button class='styled-button'>Click Me</button>",
    css: ".styled-button { padding: 10px 20px; background-color: #4CAF50; color: white; border: none; border-radius: 5px; cursor: pointer; }"
  },
  {
    name: "Card Layout ",
    html: `
      <div class="card">
        <h3>Card Title</h3>
        <p>This is a simple card layout example.</p>
      </div>
    `,
    css: `
      .card {
        border: 1px solid #ccc;
        border-radius: 8px;
        padding: 20px;
        box-shadow: 2px 2px 12px rgba(0,0,0,0.1);
        background-color: #fff;
      }
      .card h3 {
        margin-top: 0;
      }
    `
  },
  {
    name: "Shadow Text ",
    html: "<p class='shadow-text'>This is shadow text!</p>",
    css: ".shadow-text { font-size: 24px; color: #333; text-shadow: 2px 2px 5px rgba(0,0,0,0.3); }"
  },
  {
    name: "Gradient Background ",
    html: "<div class='gradient-box'>Gradient Background</div>",
    css: `
      .gradient-box {
        padding: 20px;
        color: white;
        background: linear-gradient(to right, #ff7e5f, #feb47b);
        text-align: center;
        border-radius: 8px;
      }
    `
  },
  {
    name: "Styled Button ",
    html: `
      <style>
        .styled-button { 
          padding: 10px 20px; 
          background-color: #4CAF50; 
          color: white; 
          border: none; 
          border-radius: 5px; 
          cursor: pointer; 
        }
      </style>
      <button class="styled-button">Click Me</button>
    `,
    css: "Internal CSS defined within a <style> tag in the JSX."
  }
];

function Simulation() {
  const [exampleOutputs, setExampleOutputs] = useState(Array(examples.length).fill(''));

  const handleExampleClick = (index) => {
    const example = examples[index];
    const styledOutput = `
      <style>${example.css}</style>
      ${example.html}
    `;
    const newOutputs = [...exampleOutputs];
    newOutputs[index] = styledOutput;
    setExampleOutputs(newOutputs);
  };

  return (
    <div className="app">
      <div className="examples">
        <h2>CSS Examples</h2>
        {examples.map((example, index) => (
          <div key={index} className="example">
            <h3>{example.name}</h3>
            <div className="example-content">
              <div className="example-code">
                <h4>JSX Code</h4>
                <pre>{typeof example.html === "string" ? example.html : "Inline JSX Code"}</pre>
                <h4>CSS Code</h4>
                <pre>{example.css}</pre>
              </div>
              <div className="example-output">
                <h4>Output</h4>
                <div className="output-box" dangerouslySetInnerHTML={{ __html: exampleOutputs[index] }} />
              </div>
            </div>
            <hr />
            <button onClick={() => handleExampleClick(index)}>Try It</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Simulation;
