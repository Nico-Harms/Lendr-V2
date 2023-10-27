import React, { useState } from 'react';
import '../pages/pageCss/Deals.css';
import Swap from '../assets/images/suitcase-test.svg'
import Sleepy from '../assets/images/sleepymascot.svg'

export default function Deals() {
  const [activeButton, setActiveButton] = useState(null);

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

      <div className='request-con'>
        <p>Nye Anmodninger</p>
      </div>
      <div className='suitcase-column'>
        <div className='suitcase-text'>
          <p>Kuffert</p>
          <p>30/10/23 - 7/11/23</p>
        </div>
        <div>
          <img className='swap-img' src={Swap} alt="Description of the image" />
        </div>
        <p className='info-text'>Se oplysninger</p>
      </div>
      <div className='current-deals-con'>
        <div className='current-deals-text'>
          <p>Igangværende Aftaler</p>
          <p className='current-p'>Du har ingen igangværende aftaler</p>
        </div>
          <div>
            <img className='mascot-deals' src={Sleepy} alt="sleepymascot" />
          </div>
        </div>
      <div>
        
      </div>
      <div className='request-con'>
        <p>Tidligere Anmodninger</p>
      </div>
      <div className='suitcase-column'>
        <div className='suitcase-text'>
          <p>Kuffert</p>
          <p>30/8/23 - 12/9/23</p>
        </div>
        <div>
          <img className='swap-img' src={Swap} alt="Description of the image" />
        </div>
        <p className='info-text'>Se oplysninger</p>
      </div>
    </main>
  );
}
