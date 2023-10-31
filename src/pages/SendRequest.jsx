//Lavet af Mads
import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { X, ArrowLeft } from "@phosphor-icons/react";
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import "../pages/pageCss/SendRequest.css";
import { CaretDown } from "@phosphor-icons/react";
import { useNavigate } from 'react-router-dom';
import Swipe from "../components/Swipe";

export default function SendRequest() {

    const [isSwipeOpen, setIsSwipeOpen] = useState(false);
    const [dateError, setDateError] = useState(""); // State to store date error message

    const toggleSwipe = () => {
        if (dateRange[0].startDate && dateRange[0].endDate) {
            setIsSwipeOpen(!isSwipeOpen);
            setDateError(""); // Reset the error message
        } else {
            // Set the error message when no date is selected
            setDateError("Venligst vælg en dato*");
        }
    }

    const navigate = useNavigate();
    const rentNotice = sessionStorage.getItem('rentNotice');

    const { postId } = useParams();
    const [showCalender, setShowCalender] = useState(false);
    const [dateRange, setDateRange] = useState([
        {
            startDate: null,
            endDate: null,
            key: 'selection',
        }
    ]);

    const [post, setPost] = useState(null);
    const [roundedPrice, setRoundedPrice] = useState(0);

    function navigateBack() {
        window.history.back();
    }

    function navigateHome() {
        navigate('/home');
    }

    const handleDateChange = (ranges) => {
        // Calculate the number of dates picked
        const { startDate, endDate } = ranges.selection;
        const numberOfDatesPicked = startDate && endDate ? (endDate - startDate) / (1000 * 60 * 60 * 24) + 1 : 0;

        // Update the date range state
        setDateRange([ranges.selection]);

        const actualPrice = post.details.price * numberOfDatesPicked;

        // Round 'actualPrice' to one decimal place
        const roundedPrice = actualPrice.toFixed(0);

        // Update the roundedPrice state
        setRoundedPrice(roundedPrice);
    };


    const displayCalender = showCalender ? "dateRangePicker show" : "dateRangePicker";

    const handleDisplayCalender = () => {
        setShowCalender(!showCalender);
    }

    useEffect(() => {
        async function getPost() {
            const url = `https://nico-test-589d5-default-rtdb.europe-west1.firebasedatabase.app/posts/${postId}.json`;
            const response = await fetch(url);
            if (response.status === 200) {
                const data = await response.json();
                setPost({ id: postId, ...data });
            } else {
                setPost(null);
            }
        }
        getPost();
    }, [postId]);

    if (!post) {
        return <div>Post not found</div>;
    }

    return (
        <main className="sendRequestMain">
            <div className="sendRequestWrapper">
                <div className="arrowWrapper">
                    <ArrowLeft onClick={navigateBack} size={32} /><X onClick={navigateHome} size={32} />
                </div>
                <section className="rentPeriodWrapper">
                    <div className="periodInfo">
                        <h3>Lejeperiode</h3>
                        <button className="loginBtn soMeLogin requestBtn" onClick={handleDisplayCalender}>Vælg Lejeperiode<span><CaretDown size={24} /></span></button>
                        <DateRange
                            ranges={dateRange}
                            onChange={handleDateChange}
                            startDatePlaceholder="Afhentnings dato"
                            endDatePlaceholder="Afleverings dato"
                            minDate={new Date()}
                            rangeColors={["#72CA81"]}
                            showMonthAndYearPickers={false}
                            className={displayCalender}
                        />

                        

                        <div className="periodInfoText">
                            <div><p>Lejepris:</p> <span>{roundedPrice} kr.</span></div>
                            <div><p>Depositum:</p> <span>1000 kr.</span></div>
                        </div>

                    </div>
                    <div className="rentPeriodImgWrapper"><img src={post.image} alt="" /></div>
                </section>

                <section className="productInfoWrapper">
                    <h3>Produktoplysninger</h3>
                    <div className="productInfo">
                        <div>
                            <span>Str.</span>
                            <p>{post.details.size}</p>
                        </div>
                        <div>
                            <span>Mærke.</span>
                            <p>{post.title}</p>
                        </div>
                        <div>
                            <span>Tilstand</span>
                            <p>{post.details.quality}</p>
                        </div>
                        <div>
                            <span>Lokation</span>
                            <p>{post.address}</p>
                        </div>
                    </div>
                </section>
                <textarea readOnly value={rentNotice} className="requestTextArea" name="" id="" cols="30" rows="10"></textarea>
                <button onClick={toggleSwipe} className="loginBtn soMeLogin requestBtn">Send anmodning</button>
                {dateError && <div className="dateError">{dateError}</div>}
                <Swipe isOpen={isSwipeOpen} toggleSwipe={toggleSwipe} />
            </div>
        </main>
    );
}
