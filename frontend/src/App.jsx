
import React from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import AppointmentPage from "./components/AppointmentPage";
import ReferralPage from "./components/ReferralPage";
import ConfirmationPage from "./components/ConfirmationPage";
import PatientProfilePage from "./components/PatientProfilePage";
import DoctorProfilePage from "./components/DoctorProfilePage";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/appointment" element={<AppointmentPage />} />
          <Route path="/referral" element={<ReferralPage />} />
          <Route path="/patient-profile" element={<PatientProfilePage />} />
          <Route path="/doctor-profile" element={<DoctorProfilePage />} />
          <Route path="/confirmation" element={<ConfirmationPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;



