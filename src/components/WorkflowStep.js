import React, { useState } from 'react';
import './WorkflowStep.css';

const WorkflowStep = ({ title, image, onClick, jsonSnippet }) => {
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [copyButtonText, setCopyButtonText] = useState('Copy JSON');
  const [isCopying, setIsCopying] = useState(false);

  const handleCopy = () => {
    setIsCopying(true);
    navigator.clipboard.writeText(jsonSnippet);
    setCopyButtonText('Copied!');
    setTimeout(() => {
      setIsCopying(false);
      setCopyButtonText('Copy JSON');
    }, 1000); // Reset button text after 1 second
  };

  const openPopup = () => {
    setPopupVisible(true);
    setCopyButtonText('Copy JSON'); // Reset when popup reopens
  };

  // Conditionally render the JSON snippet and Copy button for all workflows except "Upload JSON" and "Change the Unit"
  const showSnippet = jsonSnippet !== null;

  return (
    <div className="workflow-step">
      <img 
        src={image} 
        alt={title} 
        onClick={onClick} 
        style={{ cursor: 'pointer' }} // Add mouse pointer to the image
      />
      <h3>{title}</h3>

      {/* Instruction button */}
      <button className="button-primary" onClick={openPopup}>
        Instruction
      </button>

      {isPopupVisible && (
        <div className="popup">
          <div className="popup-content">
            <h4>{title} Instructions</h4>
            <p>Here are the details for {title}.</p>

            {/* Conditionally render JSON snippet and Copy button */}
            {showSnippet && (
              <>
                <pre>{jsonSnippet}</pre>
                <button 
                  className={`copy-button ${isCopying ? 'loading' : ''} ${copyButtonText === 'Copied!' ? 'copied' : ''}`}
                  onClick={handleCopy}
                  disabled={isCopying}
                >
                  {isCopying ? 'Copying...' : copyButtonText}
                </button>
              </>
            )}

            {/* Close button */}
            <button className="button-danger" onClick={() => setPopupVisible(false)}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default WorkflowStep;
