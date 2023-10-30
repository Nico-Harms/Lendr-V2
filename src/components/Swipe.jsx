import React from 'react';
import "../components/compCss/Swipe.css";
import { CaretRight, Check, X } from "@phosphor-icons/react";
import { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function Swipe({ isOpen, toggleSwipe }) {
    const [isClicked, setIsClicked] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    // Use useParams to get the postId parameter from the URL
    const { postId } = useParams();

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

                // Use the postId extracted from the URL
                if (postId) {
                    // Navigate based on the postId parameter
                    navigate('/home');
                } else if (location.pathname === '/request') {
                    navigate("/accepteddeal");
                }
            }, 1500);

            return () => {
                clearTimeout(closeTimeout);
            }
        }
    }, [isClicked, toggleSwipe, isOpen, postId, location.pathname, navigate]);

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
