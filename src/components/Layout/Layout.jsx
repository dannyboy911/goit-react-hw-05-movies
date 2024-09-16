import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styles from './Layout.module.css';

const Layout = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation(); // Get the current location

  const handleGoBack = () => {
    navigate(-1); // Go back to the previous page
  };

  return (
    <div>
      <header className={styles.header}>
        <h1>Movie App</h1>
        {/* Conditionally render the Go Back button only if not on the home page */}
        {location.pathname !== '/' && (
          <button onClick={handleGoBack} className={styles.goBackButton}>
            Go Back
          </button>
        )}
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
