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
    </div>
  );
}

export default SavedProperties;