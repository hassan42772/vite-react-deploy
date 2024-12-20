import React from 'react';
import {  useNavigate } from 'react-router-dom';
import './AdminBtn.css'; // Import the CSS file

const AdminBtn = () => {
  const navigate = useNavigate();

  const handleButtonClick = (path) => {
    navigate(path);
  };

  return (
    <div className="data-selector-container">
      <button 
        className="data-button" 
        onClick={() => handleButtonClick('/data')}
      >
        Student Data
      </button>
      <button 
        className="data-button" 
        onClick={() => handleButtonClick('/tutorData')}
      >
        Tutor Data
      </button>
    </div>
  );
};

export default AdminBtn;
