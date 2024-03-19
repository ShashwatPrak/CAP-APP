import React from 'react';
import './threelinebutton.css'; // Import CSS for styling

const ThreeLineButton = ({ onClick }) => {
  return (
    <button className="three-line-button" onClick={onClick}>
      <div className="line"></div>
      <div className="line"></div>
      <div className="line"></div>
    </button>
  );
};

export default ThreeLineButton;