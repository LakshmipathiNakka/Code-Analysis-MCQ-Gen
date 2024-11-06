// Modal.js
import React from 'react';
import './Modal.css'; // Add your CSS styles for modal here

const Modal = ({ isOpen, onClose, jsonSnippet, title }) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(jsonSnippet);
    document.getElementById('copyButton').innerText = 'Copied!';
    setTimeout(() => {
      document.getElementById('copyButton').innerText = 'Copy JSON';
    }, 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>{title}</h2>
        <pre>{jsonSnippet}</pre>
        <button id="copyButton" onClick={handleCopy}>Copy JSON</button>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
