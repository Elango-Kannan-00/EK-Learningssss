import React from "react";

const ProfileView = ({ emp, onClose }) => {
  if (!emp) return null;
  return (
    <div className="profileview-container">
      <img src={emp.image} alt="Profile-Image" />
      <h2>{emp.name}</h2>
      <p>
        <strong>Role:</strong> {emp.role}
      </p>
      <p>
        <strong>Email:</strong> {emp.email}
      </p>
      <p>
        <strong>Location:</strong> {emp.location}
      </p>
      <p>
        <strong>Skills:</strong> {emp.skills.join(", ")}
      </p>
      <p>
        <strong>Bio:</strong> {emp.bio}
      </p>
      <button onClick={onClose}>Close Profile</button>
    </div>
  );
};

export default ProfileView;
