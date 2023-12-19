import React, { useState } from 'react';

function SavedProperties() {
  const [properties, setProperties] = useState([
    // Add your properties here
    // Each property should be an object with fields for photo, address, bedrooms, shower, carpark, price
  ]);

  const handleBookViewing = () => {
    // Handle book viewing
  };

  const handleApplyRent = () => {
    // Handle apply rent
  };

  return (
    <div>
      <h2>Saved Properties</h2>
      <p>Select the properties you're most interested in moving forward with.</p>

      <button style={{backgroundColor: 'green', color: 'white'}} onClick={handleBookViewing}>Book a Viewing</button>
      <button style={{backgroundColor: 'green', color: 'white'}} onClick={handleApplyRent}>Apply to Rent</button>

      {properties.map((property, index) => (
        <div key={index} style={{border: '1px solid black', margin: '10px', padding: '10px'}}>
          <input type="checkbox" />
          <img src={property.photo} alt="Property" />
          <p>{property.address}</p>
          <p>{property.bedrooms} bedrooms</p>
          <p>{property.shower} shower</p>
          <p>{property.carpark} carpark</p>
          <p>${property.price} per week</p>
          <button>Add notes</button>
        </div>
      ))}

      <footer style={{display: 'flex', justifyContent: 'space-between'}}>
        <div>
          <img src="logo.png" alt="Logo" />
          <div>
            <a href="https://www.facebook.com">Facebook</a>
            <a href="https://www.instagram.com">Instagram</a>
            <a href="https://www.linkedin.com">LinkedIn</a>
            <a href="https://www.twitter.com">Twitter</a>
          </div>
        </div>
        <div>
          <p>Phone: 09039104642</p>
          <p>Email: info@metronz.co.nz</p>
          <p>Address: Level 33, ANZ Centre, 23-29 Albert Street, Auckland CBD 1010</p>
        </div>
      </footer>
      <div style={{textAlign: 'center'}}>
        © 2023 Metro NZ Property Management
        <br />
        SEO Services Provided By KWD - An SEO Auckland NZ Company
      </div>
    </div>
  );
}

export default SavedProperties;