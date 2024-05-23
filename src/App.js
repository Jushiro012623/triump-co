import React from 'react';
import './App.css';
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './pages/Home';
function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
