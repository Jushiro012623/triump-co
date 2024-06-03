import React from 'react';
import './App.css';
import './css/media.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './pages/Home';
import Login from './pages/Login';
import axios from 'axios';
import Signup from './pages/Signup';
function App() {
  axios.defaults.withCredentials = true;

  return (
    
    <Router>
    <div className="App">
      
      <Nav />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer />
    </div>
  </Router>

  );
}

export default App;
