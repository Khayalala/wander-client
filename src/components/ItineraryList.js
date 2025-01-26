import React from "react";
import "../styles/_itineraryList.scss";

const ItineraryList = ({ itineraries, onDelete, onEdit, onItineraryClick }) => {
  const handleDelete = (index) => {
    const isConfirmed = window.confirm(
      "Are you sure you want to delete this itinerary?"
    );
    if (isConfirmed) {
      onDelete(index);
    }
  };

  return (
    <div className="itinerary-list">
      <h2>Your Itineraries</h2>
      {itineraries.length === 0 ? (
        <p>No itineraries added yet.</p>
      ) : (
        <ul>
          {itineraries.map((itinerary, index) => (
            <li key={index} onClick={() => onItineraryClick(index)}>
              <h3>{itinerary.destination}</h3>
              <p>
                From: {itinerary.startDate} <br /> To: {itinerary.endDate}
              </p>
              <p>Activities: {itinerary.activities}</p>
              <div>
                <button
                  className="delete-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDelete(index);
                  }}
                >
                  Delete
                </button>
                <button
                  className="edit-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    onEdit(index);
                  }}
                >
                  Edit
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ItineraryList;
