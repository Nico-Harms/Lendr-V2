// Kodet af Tobias

import React, { useState } from 'react';
import "../pages/pageCss/AcceptedDeal.css";
import mascot from "../assets/images/maskot.svg";
import cloud1 from "../assets/images/cloud1.svg";
import cloud2 from "../assets/images/cloud2.svg";
import plane from "../assets/images/planeChooseImg.svg";
import { X } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

export default function AcceptedDeal() {

    const goToHome = () => {
        window.location.href = "/home";
    }

    return (
        <main className="acceptMain">
            <div className="acceptedTop">
                <X size={32} weight="light" onClick={goToHome} />
                <p>Tillykke med din nye aftale!</p>
            </div>
            <div className="accepted-deal-wrapper">
                <div className="l-quote">
                    <div className="quote">
                        <p>Du har netop sparet planeten for ca. 20 kg CO2-udledning ved at udleje din kuffert i stedet for at der skal produceres en ny!</p>
                    </div>
                </div>
                <img src={mascot} alt="maskot" className="mascot-accept" />
                <img src={cloud1} alt="Cloud" className="cloud1" />
                <img src={cloud2} alt="Cloud" className="cloud2" />
                <img src={plane} alt="plane" className="planeAccept" />
            </div>
            <div className="btnCont">
                <button className='acceptBtn'>Gå til aftale</button>
                <Link className="goToHome" to="/home">Forside</Link>
            </div>
        </main>
    )
}
