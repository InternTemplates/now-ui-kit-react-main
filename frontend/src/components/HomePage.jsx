import React from 'react';
import { Link } from 'react-router-dom';
import { assets } from "../assets/assets"; // Importing the assets

const HomePage = () => {
  return (
    <div className="home-page">
      <header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/appointments">Appointments</Link>
          <Link to="/referrals">Referrals</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/login">Log In</Link>
        </nav>
      </header>

      <main className="homepage-content">
        <section className="welcome-banner">
          <img src={assets.header_img} alt="Header" />  {/* Using image from assets */}
          <h1>Welcome to Hope Hospital</h1>
          <p>Your Health, Our Priority</p>
          <Link to="/book-appointment">
            <button>Book an Appointment</button>
          </Link>
        </section>

        <section className="featured-doctors">
          <h2>Featured Doctors</h2>
          <img src={assets.group_profiles} alt="Group Profiles" />  {/* Using image from assets */}
        </section>
      </main>
    </div>
  );
};

export default HomePage;

