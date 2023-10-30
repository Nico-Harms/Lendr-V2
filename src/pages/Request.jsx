import '../pages/pageCss/Request.css';
import Swap from '../assets/images/suitcase-test.svg'
import { CalendarBlank } from '@phosphor-icons/react';
import { useState } from 'react';
import Swipe from '../components/Swipe';
import Deny from '../components/Deny';

export default function Request() {

    const [isSwipeOpen, setIsSwipeOpen] = useState(false);
    const [isDenyOpen, setIsDenyOpen] = useState(false);
  
    const toggleSwipe = () => {
        setIsSwipeOpen(!isSwipeOpen);
    };

    const toggleDeny = () => {
        setIsDenyOpen(!isDenyOpen);
    }

    return (
        <main>
            <h3>Admodning fra Nikolaj</h3>
            <div className='request-cont'>
                <p>Lejeperiode</p>
                <div className="dates">
                    <CalendarBlank size={32} weight="light" />
                    <p> 10/10/23 - 17/10/23</p>
                </div>
                <div className="img-cont">
                    <img src={Swap} alt="swap" />
                </div>
                <div className="info-cont">
                    <div>
                        <p>Aktuel Pris:</p>
                        <p>175 kr.</p>
                    </div>
                    <div>
                        <p>Depositum:</p>
                        <p>1000 kr.</p>
                    </div>
                </div>
                <div className="request-message">
                    <p>Hej Nikolaj, jeg vil gerne leje din kuffert. Jeg skal til Spanien i en uge og har brug for en kuffert. Jeg er en meget omhyggelig person, så du kan være sikker på at din kuffert kommer tilbage i samme stand som da jeg fik den.</p>
                </div>
                <div className="open-chat">
                    <button>Åben chatten</button>
                </div>
                <div className="accept-or-deny">
                    <button onClick={toggleSwipe}>Accepter</button>
                    <button onClick={toggleDeny} >Afvis</button>
                </div>
            </div>

            <Swipe isOpen={isSwipeOpen} toggleSwipe={toggleSwipe} />
            <Deny isOpen={isDenyOpen} toggleSwipe={toggleDeny} />
        </main>
    )
}