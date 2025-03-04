import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
    const location = useLocation();

    return (
        <div className="sidebar">
            <Nav className="flex-column">
                <Nav.Link 
                    as={Link} 
                    to="/dashboard"
                    active={(location.pathname === '/dashboard').toString()}
                >
                    <i className="bi bi-house-door"></i>
                    Dashboard
                </Nav.Link>
                <Nav.Link 
                    as={Link} 
                    to="/preferences"
                    active={(location.pathname === '/preferences').toString()}
                >
                    <i className="bi bi-gear"></i>
                    Preferences
                </Nav.Link>
            </Nav>
        </div>
    );
};

export default Sidebar; 