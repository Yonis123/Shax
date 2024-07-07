import React from 'react';
import './Popup.css';

const Popup = ({ message, onClose }) => (
  <div className={`popup-overlay ${!message && 'hidden'}`}>
    <div className="popup-content">
      <p>{message}</p>
    </div>
  </div>
);

export default Popup;