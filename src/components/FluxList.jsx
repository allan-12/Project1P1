// src/components/FluxList.jsx
import React from 'react';

function FluxList({ fluxImpossibles, fluxJournaliers }) {
  return (
    <div>
      <h2>Flux Impossibles</h2>
      <div style={{ border: '1px solid black', padding: '10px', marginBottom: '20px' }}>
        {fluxImpossibles.map((flux, index) => (
          <p key={index} style={{ whiteSpace: 'pre-wrap', margin: '5px 0' }}>
            {flux}
          </p>
        ))}
      </div>

      <h2>Flux Journaliers</h2>
      <div style={{ border: '1px solid black', padding: '10px' }}>
        {fluxJournaliers.map((flux, index) => (
          <p key={index} style={{ whiteSpace: 'pre-wrap', margin: '5px 0' }}>
            {flux}
          </p>
        ))}
      </div>
    </div>
  );
}

export default FluxList;
