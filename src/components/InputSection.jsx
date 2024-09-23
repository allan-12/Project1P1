// src/components/InputSection.jsx
import React from 'react';

function InputSection({ onDateChange }) {
  return (
    <div>
      <h2>Entrées Utilisateur</h2>
      <label>Date de début :</label>
      <input type="date" onChange={(e) => onDateChange('startDate', e.target.value)} />
      
      <label>Date de fin :</label>
      <input type="date" onChange={(e) => onDateChange('endDate', e.target.value)} />
    </div>
  );
}

export default InputSection;
