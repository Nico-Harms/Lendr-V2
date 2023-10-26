import React, { useState } from 'react';
import '../pages/pageCss/Deals.css'; // Import your CSS file

export default function Deals() {
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (buttonText) => {
    setActiveButton(buttonText);
  };

  return (
    <main className="page">
      <div className="p-start">
        <p>vis mine aftaler</p>
      </div>

      <div className="btn-group">
        <button
          className={`toggle-button ${activeButton === 'Lejer' ? 'active' : ''}`}
          onClick={() => handleButtonClick('Lejer')}
        >
          Lejer
        </button>
        <button
          className={`toggle-button ${activeButton === 'Udlejer' ? 'active' : ''}`}
          onClick={() => handleButtonClick('Udlejer')}
        >
          Udlejer
        </button>
      </div>
    </main>
  );
}
