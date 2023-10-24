import React, { useEffect, useState, useRef } from 'react';
import logo from '../assets/images/lendr-logo.svg';
import './compCss/Header.css';
import { PaperPlaneTilt } from "@phosphor-icons/react";
import useScrollDirection from './scrollDirection';
import { useLocation } from 'react-router-dom';

export default function Header() {
    const headerWrapperRef = useRef(null);
    const scrollDirection = useScrollDirection();
    const location = useLocation(); // Get the current location

    useEffect(() => {
        const headerWrapper = headerWrapperRef.current;

        if (scrollDirection === "down") {
            headerWrapper.classList.add("deActive");
        } else if (scrollDirection === "up") {
            headerWrapper.classList.remove("deActive");
        }

        // Check the pathname and set display to none for '/home'
        if (location.pathname === '/' || location.pathname === '/signup') {
            headerWrapper.style.display = 'none';
        } else {
            headerWrapper.style.display = 'flex'; // Show for other paths
        }
    }, [scrollDirection, location.pathname]);


    return (
        <div ref={headerWrapperRef} className='headerWrapper'>
            <img src={logo} alt="logo" />
            <PaperPlaneTilt size={32} weight='light' />
        </div>
    );
}
