import React, { useState, useEffect } from "react";
import "../styles/_itineraryForm.scss";

const ItineraryForm = ({ onAddItinerary, editingItem }) => {
  const [formData, setFormData] = useState({
    destination: "",
    startDate: "",
    endDate: "",
    activities: "",
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (editingItem) {
      setFormData(editingItem);
    }
  }, [editingItem]);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.destination.trim()) {
      newErrors.destination = "Destination is required.";
    }
    if (!formData.startDate) {
      newErrors.startDate = "Start date is required.";
    }
    if (!formData.endDate) {
      newErrors.endDate = "End date is required.";
    }
    if (
      formData.startDate &&
      formData.endDate &&
      new Date(formData.startDate) > new Date(formData.endDate)
    ) {
      newErrors.date = "Start date must be before the end date.";
    }
    if (!formData.activities.trim()) {
      newErrors.activities = "Activities field is required.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({ ...errors, [name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onAddItinerary(formData);
      setFormData({
        destination: "",
        startDate: "",
        endDate: "",
        activities: "",
      });
      setErrors({});
    }
  };

  return (
    <form className="itinerary-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Destination</label>
        <input
          type="text"
          name="destination"
          value={formData.destination}
          onChange={handleChange}
        />
        {errors.destination && (
          <small className="error">{errors.destination}</small>
        )}
      </div>
      <div className="form-group">
        <label>Start Date</label>
        <input
          type="date"
          name="startDate"
          value={formData.startDate}
          onChange={handleChange}
        />
        {errors.startDate && (
          <small className="error">{errors.startDate}</small>
        )}
      </div>
      <div className="form-group">
        <label>End Date</label>
        <input
          type="date"
          name="endDate"
          value={formData.endDate}
          onChange={handleChange}
        />
        {errors.endDate && <small className="error">{errors.endDate}</small>}
        {errors.date && <small className="error">{errors.date}</small>}
      </div>
      <div className="form-group">
        <label>Activities</label>
        <textarea
          name="activities"
          value={formData.activities}
          onChange={handleChange}
        />
        {errors.activities && (
          <small className="error">{errors.activities}</small>
        )}
      </div>
      <button type="submit">
        {editingItem ? "Update Itinerary" : "Submit Itinerary"}
      </button>
    </form>
  );
};

export default ItineraryForm;
