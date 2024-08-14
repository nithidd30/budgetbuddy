import React, { useState, useEffect } from 'react';
import './ProfilePage.css';
import Navbar from '../../components/Navbar/Navbar';

const ProfilePage = () => {
  const [profile, setProfile] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    currentBalance: '',
    profileImage: ''
  });
  const [isNewUser, setIsNewUser] = useState(true);

  useEffect(() => {
    const email = localStorage.getItem('userEmail'); // Get the logged-in user's email from local storage
    if (email) {
      fetchProfile(email);
    }
  }, []);

  const fetchProfile = async (email) => {
    try {
      const response = await fetch(`/api/profile/${email}`);
      if (!response.ok) {
        throw new Error('Failed to fetch profile');
      }
      const data = await response.json();
      setProfile((prevProfile) => ({
        ...prevProfile,
        ...data
      }));
      setIsNewUser(false); // Set the flag to false if user details are found
    } catch (error) {
      console.error('Error fetching profile:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/profile', {
        method: isNewUser ? 'POST' : 'PUT', // Use POST for creating and PUT for updating
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(profile)
      });
      if (!response.ok) {
        throw new Error('Failed to save profile');
      }
      alert(`Profile ${isNewUser ? 'created' : 'updated'} successfully!`);
      setIsNewUser(false); // Set the flag to false after creating the profile
    } catch (error) {
      console.error('Error saving profile:', error);
      alert('Failed to save profile.');
    }
  };

  return (
    <div>
      <Navbar />
      <div className="profile-container">
        <h2>My Profile</h2>
        <form onSubmit={handleSubmit} className="profile-form">
          {/* Profile Image Section */}
          {profile.profileImage && (
            <div className="profile-image-preview">
              <img src={profile.profileImage} alt="Profile Preview" />
            </div>
          )}
          {/* Profile Fields */}
          <div className="profile-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={profile.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="profile-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={profile.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="profile-group">
            <label htmlFor="phone">Phone:</label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={profile.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="profile-group">
            <label htmlFor="address">Address:</label>
            <input
              type="text"
              id="address"
              name="address"
              value={profile.address}
              onChange={handleChange}
              required
            />
          </div>
          <div className="profile-group">
            <label htmlFor="currentBalance">Current Balance:</label>
            <input
              type="number"
              id="currentBalance"
              name="currentBalance"
              value={profile.currentBalance}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="profile-btn">
            {isNewUser ? 'Create Profile' : 'Update Profile'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProfilePage;
