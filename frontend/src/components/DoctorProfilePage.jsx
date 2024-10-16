import React from 'react';
import { doctors } from "../assets/assets";   // Importing the doctors data

const DoctorProfilePage = ({ doctorId }) => {
  const doctor = doctors.find((doc) => doc._id === doctorId);

  if (!doctor) return <p>Doctor not found!</p>;

  return (
    <div className="doctor-profile">
      <h1>Doctor Profile</h1>
      <img src={doctor.image} alt={doctor.name} />  {/* Displaying doctor's image */}
      <div>
        <h2>Name: {doctor.name}</h2>
        <p>Specialization: {doctor.speciality}</p>
        <p>Experience: {doctor.experience}</p>
        <p>About: {doctor.about}</p>
      </div>
    </div>
  );
};

export default DoctorProfilePage;
