import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styles from './Layout.module.css';

const Layout = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <header className={styles.header}>
        <h1>Movie Theatre</h1>

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
