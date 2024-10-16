import React from 'react';
import { assets } from "../assets/assets";  // Importing the assets

const PatientProfilePage = () => {
  return (
    <div className="patient-profile">
      <h1>Patient Profile</h1>
      <img src={assets.profile_pic} alt="Profile Pic" />  {/* Using image from assets */}

      <div>
        <h2>Name: John Doe</h2>
        <p>Age: 28</p>
        <p>Contact: john@example.com</p>
      </div>

      <div className="appointments">
        <h2>Upcoming Appointments:</h2>
        <ul>
          <li>Dr. Jane Smith - October 20, 2024 - 10:00 AM</li>
        </ul>
      </div>
    </div>
  );
};

export default PatientProfilePage;
