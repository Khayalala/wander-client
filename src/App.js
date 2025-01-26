// import React, { useState, useEffect } from "react";
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes,
//   Navigate,
// } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import MainContent from "./components/MainContent";
// import ItineraryForm from "./components/ItineraryForm";
// import ItineraryList from "./components/ItineraryList";
// import Footer from "./components/Footer";
// import Modal from "./components/Modal";
// import SignIn from "./components/SignIn";
// import SignUp from "./components/SignUp";
// import "./styles/main.scss";

// function App() {
//   const [itineraries, setItineraries] = useState(() => {
//     const savedItineraries = localStorage.getItem("itineraries");
//     return savedItineraries ? JSON.parse(savedItineraries) : [];
//   });

//   const [editingIndex, setEditingIndex] = useState(null);
//   const [selectedItinerary, setSelectedItinerary] = useState(null);
//   const [authenticated, setAuthenticated] = useState(() => {
//     return !!localStorage.getItem("token"); // Check if the user is authenticated
//   });

//   useEffect(() => {
//     localStorage.setItem("itineraries", JSON.stringify(itineraries));
//   }, [itineraries]);

//   const handleFormSubmit = (formData) => {
//     if (editingIndex !== null) {
//       const updatedItineraries = itineraries.map((itinerary, index) =>
//         index === editingIndex ? formData : itinerary
//       );
//       setItineraries(updatedItineraries);
//       setEditingIndex(null);
//     } else {
//       setItineraries([...itineraries, formData]);
//     }
//   };

//   const handleDelete = (index) => {
//     const updatedItineraries = itineraries.filter((_, i) => i !== index);
//     setItineraries(updatedItineraries);
//   };

//   const handleEdit = (index) => {
//     setEditingIndex(index);
//   };

//   const handleItineraryClick = (index) => {
//     setSelectedItinerary(itineraries[index]);
//   };

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     setAuthenticated(false);
//   };

//   return (
//     <Router>
//       <div className="App">
//         {authenticated ? (
//           <>
//             <Navbar
//               authenticated={authenticated}
//               setAuthenticated={setAuthenticated}
//             />
//             <Routes>
//               <Route
//                 path="/"
//                 element={
//                   <>
//                     <MainContent />
//                     <ItineraryForm
//                       onAddItinerary={handleFormSubmit}
//                       editingItem={
//                         editingIndex !== null ? itineraries[editingIndex] : null
//                       }
//                     />
//                     <ItineraryList
//                       itineraries={itineraries}
//                       onDelete={handleDelete}
//                       onEdit={handleEdit}
//                       onItineraryClick={handleItineraryClick}
//                     />
//                     <Footer />
//                     <Modal
//                       selectedItinerary={selectedItinerary}
//                       onClose={() => setSelectedItinerary(null)}
//                     />
//                   </>
//                 }
//               />
//               <Route path="*" element={<Navigate to="/" />} />
//             </Routes>
//           </>
//         ) : (
//           <Routes>
//             <Route
//               path="/signin"
//               element={<SignIn setAuthenticated={setAuthenticated} />}
//             />
//             <Route path="/signup" element={<SignUp />} />
//             <Route path="*" element={<Navigate to="/signin" />} />
//           </Routes>
//         )}
//       </div>
//     </Router>
//   );
// }

// export default App;

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
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
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

  const handleFormSubmit = (formData) => {
    if (editingIndex !== null) {
      const updatedItineraries = itineraries.map((itinerary, index) =>
        index === editingIndex ? formData : itinerary
      );
      setItineraries(updatedItineraries);
      setEditingIndex(null);
    } else {
      setItineraries([...itineraries, formData]);
    }
  };

  const handleDelete = (index) => {
    const updatedItineraries = itineraries.filter((_, i) => i !== index);
    setItineraries(updatedItineraries);
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
        {authenticated ? (
          <>
            <Navbar
              authenticated={authenticated}
              username={username}
              onLogout={handleLogout}
            />
            <Routes>
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
                    <Footer />
                    <Modal
                      selectedItinerary={selectedItinerary}
                      onClose={() => setSelectedItinerary(null)}
                    />
                  </>
                }
              />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </>
        ) : (
          <Routes>
            <Route
              path="/signin"
              element={<SignIn setAuthenticated={setAuthenticated} setUsername={setUsername} />}
            />
            <Route path="/signup" element={<SignUp />} />
            <Route path="*" element={<Navigate to="/signin" />} />
          </Routes>
        )}
      </div>
    </Router>
  );
}

export default App;