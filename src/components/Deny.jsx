// Kodet af Tobias

import React from 'react';
import "../components/compCss/Swipe.css";
import { X } from "@phosphor-icons/react";
import { useState, useEffect } from 'react';

export default function Deny({ isOpen, toggleSwipe }) {
    const [isClicked, setIsClicked] = useState(false);


    const handleXClick = () => {
        toggleSwipe();
    };

    useEffect(() => {
        if (isClicked && isOpen) {
            const closeTimeout = setTimeout(() => {
                toggleDeny();
            }, 1500); 
            return () => {
                clearTimeout(closeTimeout);
            };
        }
    }, [isClicked, toggleSwipe, isOpen]);

    const denyClick = () => {
        window.location.href = "/home";
    }

    return (
        <div className={`swiperCont ${isOpen ? 'open' : ''}`}>
            <div className="denyWrapper">
                <p>Du er ved at afvise, er du sikker?</p>
               <button className='soMeLogin' onClick={denyClick} >Afvis</button>
            </div>
            <X size={32} weight="light" className='closeSwiper' onClick={handleXClick} />
        </div>
    );
}
