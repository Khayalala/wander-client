import React from "react";
import { del } from "../api"; // Import the del function from api.js
import "../styles/_itineraryList.scss";

const ItineraryList = ({ itineraries, onDelete, onEdit, onItineraryClick }) => {
  const handleDelete = async (index) => {
    const isConfirmed = window.confirm(
      "Are you sure you want to delete this itinerary?"
    );
    if (isConfirmed) {
      try {
        // Call API to delete the itinerary from the backend
        const itineraryToDelete = itineraries[index];
        await del(`/api/itineraries/${itineraryToDelete.id}`);
        console.log("Itinerary deleted:", itineraryToDelete);

        // Notify the parent component to update the UI
        onDelete(index);
      } catch (error) {
        console.error("Error deleting itinerary:", error);
        alert("Failed to delete the itinerary. Please try again.");
      }
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
