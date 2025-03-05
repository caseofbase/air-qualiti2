import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
    const location = useLocation();

    return (
        <div className="sidebar" style={styles.sidebar}>
            <Nav className="flex-column">
                <Nav.Link 
                    as={Link} 
                    to="/dashboard"
                    active={(location.pathname === '/dashboard').toString()}
                    style={styles.link}
                    className={location.pathname === '/dashboard' ? 'active-link' : ''}
                >
                    <i className="bi bi-house-door"></i>
                    Dashboard
                </Nav.Link>
                <Nav.Link 
                    as={Link} 
                    to="/AnxietyDashboard"
                    active={(location.pathname === '/AnxietyDashboard').toString()}
                    style={styles.link}
                    className={location.pathname === '/AnxietyDashboard' ? 'active-link' : ''}
                >
                    <i className="bi bi-gear"></i>
                    Anxiety Dashboard
                </Nav.Link>
                <Nav.Link 
                    as={Link} 
                    to="/preferences"
                    active={(location.pathname === '/preferences').toString()}
                    style={styles.link}
                    className={location.pathname === '/preferences' ? 'active-link' : ''}
                >
                    <i className="bi bi-gear"></i>
                    Preferences
                </Nav.Link>
            </Nav>
        </div>
    );
};

const styles = {
    sidebar: {
        backgroundColor: '#dff5c1',
        height: '100%',
        padding: '20px 0',
    },
    link: {
        color: '#123522',
        transition: 'all 0.3s ease',
        padding: '10px 20px',
    }
};

// Add this CSS to your global styles or create a new CSS file
const cssToAdd = `
.active-link {
    background-color: #123522 !important;
    color: #dff5c1 !important;
}

.nav-link:hover {
    background-color: #123522 !important;
    color: #dff5c1 !important;
}
`;

// Add the styles to the document
const styleSheet = document.createElement("style");
styleSheet.innerText = cssToAdd;
document.head.appendChild(styleSheet);

export default Sidebar; 