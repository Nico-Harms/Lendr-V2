import { motion } from "framer-motion"
import React, { useState, useEffect } from 'react';
import { SlidersHorizontal, SortAscending } from "@phosphor-icons/react";
import bagsFilter from '../assets/images/kategori-taske.svg'
import suitcaseFilter from '../assets/images/kategori-kuffert.svg'
import otherFilter from '../assets/images/kategori-ass.svg'
import './compCss/Filter.css';



const itemVariants = {
    open: {
        opacity: 1,
        y: 0,
        transition: { type: 'spring', stiffness: 300, damping: 24 },
    },
    closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

const containerVariants = {
    open: {
        backgroundColor: "#72CA81",
    },
    closed: {
        backgroundColor: "#fafaff",
    },
};

export default function Filter({ handleSort }) {

    const [isSortOpen, setIsSortOpen] = useState(false);
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [sliderValue, setSliderValue] = useState(0);
    const [distanceSliderValue, setDistanceSliderValue] = useState(0);

    const toggleSortDropdown = () => {
        setIsSortOpen(!isSortOpen);
        setIsFilterOpen(false);
    };

    const toggleFilterDropdown = () => {
        setIsFilterOpen(!isFilterOpen);
        setIsSortOpen(false);
    };

    const handleSliderChange = (event) => {
        setSliderValue(event.target.value);
    };

    const handleDistanceSliderChange = (event) => {
        setDistanceSliderValue(event.target.value);
    };
    const handleSortClick = (option) => {
        handleSort(option);  // Call the original handleSort function

        // Close both filter and sort dropdowns
        setIsFilterOpen(false);
        setIsSortOpen(false);
    };

    
    return (
        <>
            <div className="filter-wrapper">
                <div className="filter-sort-wrapper">
                    <motion.div
                        initial={false}
                        animate={isSortOpen ? 'open' : 'closed'}
                        className="sort"
                        variants={containerVariants}>
                        <motion.button
                            variants={{
                                open: { backgroundColor: "#72CA81", color: "#fafaff" },
                                closed: { backgroundColor: "#fafaff", color: "#031926" },
                            }}
                            whileTap={{ scale: 0.97 }}
                            onClick={(toggleSortDropdown)}>
                            Sorter
                            <motion.div
                                variants={{
                                    open: { rotateX: 180, y: -5, color: "#fafaff" },
                                    closed: { rotateX: 0, y: 0, color: "#031926" },

                                }}
                                transition={{ duration: 0.2 }}

                            >
                                <SortAscending size={32} />
                            </motion.div>
                        </motion.button>
                        <motion.section
                            variants={{
                                open: {
                                    clipPath: 'inset(0% 0% 0% 0%)',
                                    transition: {
                                        type: 'spring',
                                        bounce: 0,
                                        duration: 0.7,
                                        delayChildren: 0.3,
                                        staggerChildren: 0.05,
                                    },
                                },
                                closed: {
                                    clipPath: 'inset(10% 50% 90% 50%)',
                                    transition: {
                                        type: 'spring',
                                        bounce: 0,
                                        duration: 0.3,
                                    },
                                },
                            }}
                            style={{ pointerEvents: isSortOpen ? 'auto' : 'none' }}
                        >
                            <motion.div variants={itemVariants} onClick={() => handleSortClick("newestFirst")}>
                                <p>Nyeste først</p>
                                <hr />
                            </motion.div>
                            <motion.div variants={itemVariants} onClick={() => handleSortClick("oldestFirst")}>
                                <p>Ældste først</p>
                                <hr />
                            </motion.div>
                            <motion.div variants={itemVariants} onClick={() => handleSortClick("lowestPrice")}>
                                <p>Laveste Pris</p>
                                <hr />
                            </motion.div>

                            <motion.div variants={itemVariants} onClick={() => handleSortClick("highestPrice")}>
                                <p>Højeste Pris</p>
                                <hr />
                            </motion.div>
                            <motion.div variants={itemVariants}>
                                <p>Afstand</p>
                                <hr />
                            </motion.div>
                        </motion.section>
                    </motion.div>
                    <motion.div
                        initial={false}
                        animate={isFilterOpen ? 'open' : 'closed'}
                        className="filter"
                        variants={containerVariants}>
                        <motion.button
                            variants={{
                                open: { backgroundColor: "#72CA81", color: "#fafaff" },
                                closed: { backgroundColor: "#fafaff", color: "#031926" },
                            }}
                            whileTap={{ scale: 0.97 }}
                            onClick={(toggleFilterDropdown)}>
                            Filtrer
                            <motion.div
                                variants={{
                                    open: { rotateX: 180, y: -5 },
                                    closed: { rotateX: 0, y: 0 },
                                }}
                                transition={{ duration: 0.2 }}

                            >
                                <SlidersHorizontal size={32} />
                            </motion.div>
                        </motion.button>
                        <motion.section
                            variants={{
                                open: {
                                    clipPath: 'inset(0% 0% 0% 0%)',
                                    transition: {
                                        type: 'spring',
                                        bounce: 0,
                                        duration: 0.7,
                                        delayChildren: 0.3,
                                        staggerChildren: 0.05,
                                    },
                                },
                                closed: {
                                    clipPath: 'inset(10% 50% 90% 50%)',
                                    transition: {
                                        type: 'spring',
                                        bounce: 0,
                                        duration: 0.3,
                                    },
                                },
                            }}
                            style={{ pointerEvents: isFilterOpen ? 'auto' : 'none' }}
                        >
                            <motion.div variants={itemVariants}>
                                <p>Produkt</p>
                                <div className="categories-wrapper">
                                    <img src={suitcaseFilter} alt="" />
                                    <img src={bagsFilter} alt="" />
                                    <img src={otherFilter} alt="" />
                                </div>
                                <hr />
                            </motion.div>
                            <motion.div variants={itemVariants}>
                                <p>Størrelse</p>
                                <div className='size-wrapper'>
                                    <div>
                                        <p className='sizeHeading'>
                                            Small <br />
                                            <span className='sizeLitre'>25-50L</span>
                                        </p>
                                    </div>
                                    <div>
                                        <p className='sizeHeading'>
                                            Medium <br />
                                            <span className='sizeLitre'>50-70L</span>
                                        </p>
                                    </div>
                                    <div>
                                        <p className='sizeHeading'>
                                            Large <br />
                                            <span className='sizeLitre'>70-105L</span>
                                        </p>
                                    </div>
                                    <div>
                                        <p className='sizeHeading'>
                                            XL <br />
                                            <span className='sizeLitre'>105-135L</span>
                                        </p>
                                    </div>
                                </div>
                                <hr />
                            </motion.div>
                            <motion.div className="color-picker" variants={itemVariants}>
                                <p>Farve</p>
                                <div className="color-cont">
                                    <label className="color-box color-black">
                                        <input type="radio" name="color" value="black" />
                                    </label>
                                    <label className="color-box color-white">
                                        <input type="radio" name="color" value="white" />
                                    </label>
                                    <label className="color-box color-gray">
                                        <input type="radio" name="color" value="gray" />
                                    </label>
                                    <label className="color-box color-red">
                                        <input type="radio" name="color" value="red" />
                                    </label>
                                    <label className="color-box color-orange">
                                        <input type="radio" name="color" value="orange" />
                                    </label>
                                    <label className="color-box color-yellow">
                                        <input type="radio" name="color" value="yellow" />
                                    </label>

                                    <label className="color-box color-pink">
                                        <input type="radio" name="color" value="pink" />
                                    </label>
                                    <label className="color-box color-cyan">
                                        <input type="radio" name="color" value="cyan" />
                                    </label>
                                    <label className="color-box color-brown">
                                        <input type="radio" name="color" value="brown" />
                                    </label>
                                    <label className="color-box color-blue">
                                        <input type="radio" name="color" value="blue" />
                                    </label>
                                </div>
                                <p className="small-text" >scroll til siden</p>
                                <hr />
                            </motion.div>
                            <motion.div variants={itemVariants}>
                                <p>Pris (pr. dag)</p>
                                <div className="price-range-slider">
                                    <input
                                        type="range"
                                        id="price-slider"
                                        min="0"
                                        max="1000"
                                        value={sliderValue}
                                        step="10"
                                        onChange={handleSliderChange}
                                    />
                                    <div className="slider-value">
                                        <span className="min-value">0kr</span>
                                        <span className="max-value">{sliderValue}kr</span>
                                    </div>
                                </div>
                                <hr />
                            </motion.div>
                            <motion.div variants={itemVariants}>
                                <p>Afstand (km)</p>
                                <div className="distance-range-slider">
                                    <input
                                        type="range"
                                        id="distance-slider"
                                        min="0"
                                        max="100"
                                        value={distanceSliderValue}
                                        step="1"
                                        onChange={handleDistanceSliderChange}
                                    />
                                    <div className="slider-value">
                                        <span className="min-value">0km</span>
                                        <span className="max-value">{distanceSliderValue}km</span>
                                    </div>
                                </div>
                                <hr />
                                <div className="filterBtn">
                                    <a className="applyBtn" href="#">Anvend</a>
                                    <a className="clearBtn" href="#">Nulstil</a>
                                </div>
                            </motion.div>
                        </motion.section>
                    </motion.div>
                </div>
            </div>
        </>
    );
}