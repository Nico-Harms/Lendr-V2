import React from 'react';
import "../components/compCss/Swipe.css";
import { CaretRight, Check, X } from "@phosphor-icons/react";
import { useState, useEffect } from 'react';

export default function Swipe({ isOpen, toggleSwipe }) {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(!isClicked);
    };

    const handleXClick = () => {
        toggleSwipe();
    };

    useEffect(() => {
        if (isClicked && isOpen) {
            const closeTimeout = setTimeout(() => {
                toggleSwipe();
            }, 1500); 
            return () => {
                clearTimeout(closeTimeout);
            };
        }
    }, [isClicked, toggleSwipe, isOpen]);

    const swiperClass = isClicked ? 'swiper clicked' : 'swiper';
    const buttonText = isClicked ? 'Accepteret' : 'Acceptér';
    const buttonIcon = isClicked ? <Check size={32} weight="light" /> : <CaretRight size={32} weight="light" />;

    return (
        <div className={`swiperCont ${isOpen ? 'open' : ''}`}>
            <div className="swiperWrapper">
                <a href="#" className={swiperClass}>
                    {buttonText}<span onClick={handleClick}>{buttonIcon}</span>
                </a>
            </div>
            <X size={32} weight="light" className='closeSwiper' onClick={handleXClick} />
        </div>
    );
}
