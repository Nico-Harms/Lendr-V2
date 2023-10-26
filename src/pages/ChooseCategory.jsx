import bagsImg from "../assets/images/kategori-taske.svg";
import suitcasesImg from "../assets/images/kategori-kuffert.svg";
import assImg from "../assets/images/kategori-ass.svg";
import "../pages/pageCss/ChooseCategory.css";
import {useNavigate } from "react-router-dom";

export default function ChooseCategory() {

    const navigate = useNavigate()

    function handleClick() {
        navigate("/home")
    }

    return (
        <main className="chooseCategoryMain">
            <h2>Hvad søger du?</h2>
            <div onClick={handleClick} className="categoryOptionWrapper">
                <img src={bagsImg} alt="" />
                <h4>Kufferter</h4>
            </div>
            <div className="categoryOptionWrapper">
                <img src={suitcasesImg} alt="" />
                <h4>Rygsække</h4>
            </div>
            <div className="categoryOptionWrapper">
                <img src={assImg} alt="" />
                <h4>Tilbehør</h4>
            </div>
            <p>Vis alle produkter</p>
        </main>
    );
}   