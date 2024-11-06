// Procedure.jsx
import React from 'react';
import './Procedure.css';

const Procedure = () => {
  return (
    <div className="procedure">
      <h2>How to Use the Simulation</h2>
      
      <ol>
        <li>
          <strong>Select an Example:</strong> Browse through the list of examples on the left side of the page. Each example demonstrates a different CSS styling technique, such as centered text or gradient backgrounds.
        </li>
        <li>
          <strong>View the Code:</strong> Click on an example to view its JSX and CSS code. The JSX code is displayed with inline or external styling examples to help you understand the setup.
        </li>
        <li>
          <strong>Try It Out:</strong> Press the "Try It" button to render the example in the output section on the right side. This will show you a live preview of how the CSS is applied.
        </li>
      </ol>
      
      <p>Explore different CSS styles and experiment with custom code to learn how different properties work together. Happy coding!</p>
    </div>
  );
};

export default Procedure;
