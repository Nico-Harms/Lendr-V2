// Kodet af Emil & Tobias

import React, { useState } from 'react';
import '../pages/pageCss/Deals.css';
import Udlejer from '../components/Udlejer';
import Lejer from '../components/Lejer';

export default function Deals() {
  const [activeButton, setActiveButton] = useState('Udlejer');

  const handleButtonClick = (buttonText) => {
    setActiveButton(buttonText);
  };
 
  return (
    <main className="page">
      <div className="my-deals">
        <h2>Mine aftaler</h2>
      </div>

      <div className="btn-group">
        <button
          className={`toggle-button ${activeButton === 'Lejer' ? 'active' : ''}`} onClick={() => handleButtonClick('Lejer')}>Lejer</button>
        <button className={`toggle-button ${activeButton === 'Udlejer' ? 'active' : ''}`} onClick={() => handleButtonClick('Udlejer')}>Udlejer</button>
      </div>

      {activeButton === 'Lejer' ? <Lejer /> : null}
      {activeButton === 'Udlejer' ? <Udlejer /> : null}

    </main>
  );
}
