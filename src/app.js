// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Dashboard from './pages/dashboard/Dashboard';
import AnxietyDashboard from './pages/dashboard/AnxietyDashboard';
import UserPreferences from './pages/UserPreferences';
import Login from './pages/login';
import SignUp from './pages/signUp';
import Questionnaire from './pages/Questionnaire';
import { useAuth } from './hooks/useAuth';
import './styles/style.css';

const App = () => {
  const { isAuthenticated } = useAuth();

  return (
    <Router>
      <div className="App">
        {/* Only render Navbar for authenticated routes */}
        {isAuthenticated && <Navbar />}
        
        <div className="main-content">
          <Routes>
            {/* Public routes */}
            <Route path="/login" element={<Login />} />
            <Route path="/Signup" element={<SignUp />} />
            <Route path="/questionnaire" element={<Questionnaire />} />

            {/* Protected routes */}
            <Route 
              path="/dashboard" 
              element={
                isAuthenticated ? (
                  <>
                    <Dashboard />
                  </>
                ) : (
                  <Navigate to="/login" />
                )
              } 
            />
            <Route 
              path="/anxietydashboard" 
              element={
                isAuthenticated ? (
                  <>
                    <AnxietyDashboard />
                  </>
                ) : (
                  <Navigate to="/login" />
                )
              } 
            />
            <Route 
              path="/preferences" 
              element={
                isAuthenticated ? (
                  <>
                    <UserPreferences />
                  </>
                ) : (
                  <Navigate to="/login" />
                )
              } 
            />
            <Route 
              path="/" 
              element={<Navigate to="/dashboard" />} 
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;