// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Sidebar from './components/layout/Sidebar';
import Dashboard from './pages/dashboard/Dashboard';
import AnxietyDashboard from './pages/dashboard/AnxietyDashboard';
import Preferences from './pages/UserPreferences';
import './styles/style.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Sidebar />
        <div className="main-content">
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/AnxietyDashboard" element={<AnxietyDashboard />} />
            <Route path="/preferences" element={<Preferences />} />
            <Route path="/" element={<Dashboard />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;