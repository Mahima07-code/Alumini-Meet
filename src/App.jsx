import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar"
import Navbar2 from "./components/Navbar2"
import Footer from "./components/Footer"
import Home from './components/Home'

// import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Header from './components/Header'
// import Auth from "./pages/Auth"
// import AlumniDirectory from "./pages/AlumniDirectory"
// import Events from "./pages/Events"
// import Achievements from "./pages/Achievements"
// import CareerSupport from "./pages/CareerSupport"
// import Profile from "./pages/Profile"
import LightRays from './LightRays';

// import LightRays from '';

const App = () => {
  return (
    <Router>
      <Header />
      <Navbar2 />

      {/* <div style={{ width: '100%', height: '600px', position: 'relative' }}>
        <LightRays
          raysOrigin="top-center"
          raysColor="#00ffff"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={1.2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          className="custom-rays"
        />
      </div> */}

      <div style={{ width: '100%', height: '600px', position: 'relative' }}>
        <LightRays
          raysOrigin="top-center"
          raysColor="#00ffff"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={1.2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          className="custom-rays"
        />
      </div>
      <Routes >
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/login" element={<Auth />} />
        <Route path="/alumni" element={<AlumniDirectory />} />
        <Route path="/events" element={<Events />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/career" element={<CareerSupport />} />
        <Route path="/profile" element={<Profile />} /> */}
      </Routes>

      <Footer />

    </Router>
  );
}

export default App;