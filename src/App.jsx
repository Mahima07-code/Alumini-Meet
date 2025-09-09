import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

// import Home from "./pages/Home"
// import Auth from "./pages/Auth"
// import AlumniDirectory from "./pages/AlumniDirectory"
// import Events from "./pages/Events"
// import Achievements from "./pages/Achievements"
// import CareerSupport from "./pages/CareerSupport"
// import Profile from "./pages/Profile"


const App =()=> {
  return (
    <Router>

      <Navbar />

      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Auth />} />
        <Route path="/alumni" element={<AlumniDirectory />} />
        <Route path="/events" element={<Events />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/career" element={<CareerSupport />} />
        <Route path="/profile" element={<Profile />} />
      </Routes> */}

      <Footer />

    </Router>
  );
}

export default App;