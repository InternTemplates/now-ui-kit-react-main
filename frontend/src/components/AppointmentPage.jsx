// import React, { useState } from 'react';
// import { doctors } from '../assets/assets';  // Importing the doctors data

// const AppointmentBookingPage = () => {
//   const [selectedDoctor, setSelectedDoctor] = useState(null);
//   const [appointmentDate, setAppointmentDate] = useState('');
//   const [timeSlot, setTimeSlot] = useState('');

//   const handleBookAppointment = () => {
//     // Handle the appointment booking logic here
//   };

//   return (
//     <div className="appointment-booking">
//       <h1>Book an Appointment</h1>

//       <div className="doctor-list">
//         <h2>Choose a Doctor:</h2>
//         {doctors.map((doctor) => (
//           <div key={doctor._id} onClick={() => setSelectedDoctor(doctor)}>
//             <img src={doctor.image} alt={doctor.name} />  {/* Displaying doctor's image */}
//             <p>{doctor.name}</p>
//             <p>{doctor.speciality}</p>
//           </div>
//         ))}
//       </div>

//       {selectedDoctor && (
//         <div className="appointment-scheduler">
//           <h2>Selected Doctor: {selectedDoctor.name}</h2>
//           <h2>Select Date:</h2>
//           <input
//             type="date"
//             value={appointmentDate}
//             onChange={(e) => setAppointmentDate(e.target.value)}
//           />

//           {appointmentDate && (
//             <div className="time-slots">
//               <h2>Select Time Slot:</h2>
//               <button onClick={() => setTimeSlot('10:00 AM')}>10:00 AM</button>
//               <button onClick={() => setTimeSlot('11:00 AM')}>11:00 AM</button>
//               {/* Add more time slots */}
//             </div>
//           )}
//         </div>
//       )}

//       {timeSlot && (
//         <div className="confirm-appointment">
//           <button onClick={handleBookAppointment}>Confirm Appointment</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AppointmentPage;
