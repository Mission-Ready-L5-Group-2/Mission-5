import React from 'react';

function Booked() {
  const handleGoHome = () => {
    // Handle go home
  };

  return (
    <div>
      <header>
        <img src="path_to_your_hero_image.jpg" alt="Hero" /> {/* Add your hero image here */}
      </header>

      <div style={{backgroundColor: '#1B7FC8', color: 'white', padding: '20px', textAlign: 'center'}}>
        <div style={{backgroundColor: 'white', borderRadius: '50%', width: '50px', height: '50px', margin: 'auto'}}>
          {/* Add your check icon here */}
        </div>
        <h2>Thank You</h2>
        <p>Your inquiry has been received.</p>
        <p>We will contact you soon.</p>
        <button style={{backgroundColor: 'green', color: 'white', borderRadius: '20px'}} onClick={handleGoHome}>Go Home</button>
      </div>

      <footer />     
    </div>
  );
}

export default Booked;