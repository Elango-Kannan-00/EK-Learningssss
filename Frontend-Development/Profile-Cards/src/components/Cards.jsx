import React from "react";

import "../App.css";

const Cards = ({ emp, viewProfile }) => {
  return (
    <div className="card-container">
      <div className="photo-section">
        <img src={emp.image} alt="Profile-Photo" />
      </div>
      <div className="content-section">
        <h4>{emp.name}</h4>
        <h5>
          <i>{emp.role}</i>
        </h5>
        <button onClick={viewProfile}>View Profile</button>
      </div>
    </div>
  );
};

export default Cards;
