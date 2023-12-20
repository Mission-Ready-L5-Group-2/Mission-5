import React, { useState } from 'react';

function BookingPopup() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [viewingDate, setViewingDate] = useState('');
  const [comments, setComments] = useState('');

  const handleBooking = () => {
    // Handle booking
  };

  return (
    <div>
      <h2>Contact Details</h2>

      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <input type="text" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        <input type="text" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
      </div>

      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="tel" placeholder="Mobile" value={mobile} onChange={(e) => setMobile(e.target.value)} />

      <h3>Choose a Viewing Date</h3>
      <input type="radio" id="date1" name="viewingDate" value="Tuesday, 24 December, 12:30" onChange={(e) => setViewingDate(e.target.value)} />
      <label htmlFor="date1">Tuesday, 24 December, 12:30</label>
      <input type="radio" id="date2" name="viewingDate" value="Viewing Times Not Suitable" onChange={(e) => setViewingDate(e.target.value)} />
      <label htmlFor="date2">Viewing Times Not Suitable</label>

      <textarea placeholder="Comments" value={comments} onChange={(e) => setComments(e.target.value)} />

      <button style={{backgroundColor: 'green', color: 'white', borderRadius: '20px'}} onClick={handleBooking}>Booking</button>
    </div>
  );
}

export default BookingPopup;