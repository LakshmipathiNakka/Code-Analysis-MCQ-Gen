// InstructionModal.js
import React from 'react';
import './Modal.css'; // Reuse styles or create new styles for instruction modal

const InstructionModal = ({ isOpen, onClose, instruction }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Instruction</h2>
        <p>{instruction}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default InstructionModal;
