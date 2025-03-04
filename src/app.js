// App.js
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Dashboard from './pages/dashboard/Dashboard';
import UserPreferences from './pages/UserPreferences';
import Login from './pages/login';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/style.css';  // Updated path

const App = () => {
  const [city, setCity] = useState('Toronto');

  return (
    <Router>
      <Layout city={city} onCityChange={setCity}>
        <Routes>
          <Route path="/" element={<Dashboard city={city} />} />
          <Route path="/dashboard" element={<Dashboard city={city} />} />
          <Route path="/analytics" element={<Dashboard city={city} />} />
          <Route path="/preferences" element={<UserPreferences />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/user-preferences" element={<UserPreferences />} />
          <Route path="/UserPreferences" element={<UserPreferences />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;