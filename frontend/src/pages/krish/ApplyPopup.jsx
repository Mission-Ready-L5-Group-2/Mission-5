import React, { useState } from 'react';

function ApplyPopup() {
  const [date, setDate] = useState('');
  const [tenancy, setTenancy] = useState('');
  const [duration, setDuration] = useState('');
  const [viewed, setViewed] = useState('');

  const handleApplyClick = () => {
    alert(`Date: ${date}, Tenancy: ${tenancy}, Duration: ${duration}, Viewed: ${viewed}`);
  };

  return (
    <div>
      <h2>Apply for Property</h2>

      <label>
        When can you take the property?
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      </label>

      <label>
        Preferred tenancy type
        <select value={tenancy} onChange={(e) => setTenancy(e.target.value)}>
          <option value="">Select...</option>
          <option value="periodic">Periodic</option>
          <option value="fixed-term">Fixed-term tenancy</option>
        </select>
      </label>

      <label>
        How long do you want the property for?
        <select value={duration} onChange={(e) => setDuration(e.target.value)}>
          <option value="">Select...</option>
          <option value="1 year">1 year</option>
          <option value="2 years">2 years</option>
          <option value="2+ years">2+ years</option>
        </select>
      </label>

      <label>
        Have you viewed the property?
        <select value={viewed} onChange={(e) => setViewed(e.target.value)}>
          <option value="">Select...</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </label>

      <button style={{backgroundColor: 'green', color: 'white'}} onClick={handleApplyClick}>Apply</button>
    </div>
  );
}

export default ApplyPopup;