import React from "react";
import "../styles/_modal.scss";

const Modal = ({ selectedItinerary, onClose }) => {
  if (!selectedItinerary) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()} 
      >
        <button className="close-btn" onClick={onClose}>
          &times;
        </button>
        <h2>{selectedItinerary.destination}</h2>
        <p>
          <strong>From:</strong> {selectedItinerary.startDate}
        </p>
        <p>
          <strong>To:</strong> {selectedItinerary.endDate}
        </p>
        <p>
          <strong>Activities:</strong> {selectedItinerary.activities}
        </p>
      </div>
    </div>
  );
};

export default Modal;
