// client/src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login'; // Import Login component

const App = () => {
  return (
    <Router> {/* Wrap everything inside Router */}
      <div className="App">
        <Routes>
          {/* Define the route for the Login page */}
          <Route path="/" element={<Login />} /> 
        </Routes>
      </div>
    </Router>
  );
};

export default App;

