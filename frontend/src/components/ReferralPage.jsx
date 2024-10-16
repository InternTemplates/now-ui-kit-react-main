import React, { useState } from 'react';
import { assets } from "../assets/assets";  // Importing the assets

const ReferralPage = () => {
  const [referralData, setReferralData] = useState({
    referredBy: '',
    doctor: '',
    referralCode: '',
  });

  const handleSubmit = () => {
    // Handle the referral submission logic here
  };

  return (
    <div className="referral-page">
      <h1>Referral Page</h1>

      <img src={assets.contact_image} alt="Contact" />  {/* Using image from assets */}

      <label>Referred By:</label>
      <input
        type="text"
        value={referralData.referredBy}
        onChange={(e) =>
          setReferralData({ ...referralData, referredBy: e.target.value })
        }
      />

      <label>Doctor's Name/Specialization:</label>
      <select
        value={referralData.doctor}
        onChange={(e) =>
          setReferralData({ ...referralData, doctor: e.target.value })
        }
      >
        <option value="">Select Doctor</option>
        {/* Add doctor options */}
      </select>

      <label>Referral Code (Optional):</label>
      <input
        type="text"
        value={referralData.referralCode}
        onChange={(e) =>
          setReferralData({ ...referralData, referralCode: e.target.value })
        }
      />

      <button onClick={handleSubmit}>Submit Referral</button>
    </div>
  );
};

export default ReferralPage;
