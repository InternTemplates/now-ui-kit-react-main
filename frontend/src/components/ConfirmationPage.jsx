import React from 'react';
import { assets } from '../assets/assets';  // Importing the assets

const ConfirmationPage = () => {
  return (
    <div className="confirmation-page">
      <h1>Appointment Confirmed</h1>
      <p>Your appointment with Dr. John Doe is confirmed for October 20, 2024, at 10:00 AM.</p>

      <img src={assets.verified_icon} alt="Verified" />  {/* Using verified icon from assets */}
      <button>Add to Calendar</button>
      <button>Download Receipt</button>
    </div>
  );
};

export default ConfirmationPage;
