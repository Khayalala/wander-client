import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent";
import ItineraryForm from "./components/ItineraryForm";
import ItineraryList from "./components/ItineraryList";
import Footer from "./components/Footer";
import Modal from "./components/Modal";
import About from "./components/About";
import Contact from "./components/Contact";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import { post, del } from "./api"; // Import API functions
import "./styles/main.scss";

function App() {
  const [itineraries, setItineraries] = useState(() => {
    const savedItineraries = localStorage.getItem("itineraries");
    return savedItineraries ? JSON.parse(savedItineraries) : [];
  });

  const [editingIndex, setEditingIndex] = useState(null);
  const [selectedItinerary, setSelectedItinerary] = useState(null);
  const [authenticated, setAuthenticated] = useState(() => {
    return !!localStorage.getItem("token");
  });

  const [username, setUsername] = useState(() => {
    return localStorage.getItem("username") || "";
  });

  useEffect(() => {
    localStorage.setItem("itineraries", JSON.stringify(itineraries));
  }, [itineraries]);

  // Handle form submission to add or update an itinerary
  const handleFormSubmit = async (formData) => {
    if (editingIndex !== null) {
      // Update existing itinerary locally
      const updatedItineraries = itineraries.map((itinerary, index) =>
        index === editingIndex ? formData : itinerary
      );
      setItineraries(updatedItineraries);
      setEditingIndex(null);
    } else {
      try {
        // Save new itinerary to the backend
        const response = await post("/api/itineraries", formData);
        // Update local state with the response from the backend
        setItineraries([...itineraries, response]);
      } catch (error) {
        console.error("Error adding itinerary:", error);
      }
    }
  };

  // Handle deleting an itinerary
  const handleDelete = async (index) => {
    const itineraryToDelete = itineraries[index];
    try {
      // Remove the itinerary from the backend
      await del(`/api/itineraries/${itineraryToDelete.id}`);
      // Update local state
      const updatedItineraries = itineraries.filter((_, i) => i !== index);
      setItineraries(updatedItineraries);
    } catch (error) {
      console.error("Error deleting itinerary:", error);
    }
  };

  const handleEdit = (index) => {
    setEditingIndex(index);
  };

  const handleItineraryClick = (index) => {
    setSelectedItinerary(itineraries[index]);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    setAuthenticated(false);
    setUsername("");
  };

  return (
    <Router>
      <div className="App">
        <Navbar
          authenticated={authenticated}
          username={username}
          onLogout={handleLogout}
        />
        <Routes>
          {authenticated ? (
            <>
              <Route
                path="/"
                element={
                  <>
                    <MainContent />
                    <ItineraryForm
                      onAddItinerary={handleFormSubmit}
                      editingItem={
                        editingIndex !== null ? itineraries[editingIndex] : null
                      }
                    />
                    <ItineraryList
                      itineraries={itineraries}
                      onDelete={handleDelete}
                      onEdit={handleEdit}
                      onItineraryClick={handleItineraryClick}
                    />
                    <Modal
                      selectedItinerary={selectedItinerary}
                      onClose={() => setSelectedItinerary(null)}
                    />
                  </>
                }
              />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<Navigate to="/" />} />
            </>
          ) : (
            <>
              <Route
                path="/signin"
                element={
                  <SignIn
                    setAuthenticated={setAuthenticated}
                    setUsername={setUsername}
                  />
                }
              />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<Navigate to="/signin" />} />
            </>
          )}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
