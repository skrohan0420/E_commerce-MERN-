import React, { useState, useEffect } from "react";

import "./ImageSlider.css";

function ImageSlider({ children }) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [slideDone, setSlideDone] = useState(true);
    const [timeID, setTimeID] = useState(null);

    useEffect(() => {
        if (slideDone) {
            setSlideDone(false);
            setTimeID(
                setTimeout(() => {
                    slideNext();
                    setSlideDone(true);
                }, 5000)
            );
        }
    }, [slideDone]);

    const slideNext = () => {
        setActiveIndex((val) => {
            if (val >= children.length - 1) {
                return 0;
            } else {
                return val + 1;
            }
        });
    };

    const slidePrev = () => {
        setActiveIndex((val) => {
            if (val <= 0) {
                return children.length - 1;
            } else {
                return val - 1;
            }
        });
    };

    const AutoPlayStop = () => {
        if (timeID > 0) {
            clearTimeout(timeID);
            setSlideDone(false);
        }
    };

    const AutoPlayStart = () => {
        if (!slideDone) {
            setSlideDone(true);
        }
    };

    return (
        <div className="main_sliderBx">
            <div
                className="container__slider"
                onMouseEnter={AutoPlayStop}
                onMouseLeave={AutoPlayStart}
            >
                {children.map((item, index) => {
                    return (
                        <div
                            className={"product-image-bx slider__item slider__item-active-" + (activeIndex + 1)}
                            key={index}
                        >
                            {item}
                        </div>
                    );
                })}



            </div>

            <div className="btnBx">
              

                <button
                    className="slider__btn-prev"
                    onClick={(e) => {
                        e.preventDefault();
                        slidePrev();
                    }}
                >
                    <i className='bx bx-left-arrow-alt'></i>
                </button>
                <div className="container__slider__links slider_links_con">
                    {children.map((item, index) => {
                        return (
                            <button
                                key={index}
                                className={
                                    activeIndex === index
                                        ? "container__slider__links-small container__slider__links-small-active"
                                        : "container__slider__links-small"
                                }
                                onClick={(e) => {
                                    e.preventDefault();
                                    setActiveIndex(index);
                                }}
                            ></button>
                        );
                    })}
                </div>
                <button
                    className="slider__btn-next"
                    onClick={(e) => {
                        e.preventDefault();
                        slideNext();
                    }}
                >
                    <i className='bx bx-right-arrow-alt'></i>
                </button>
            </div>
        </div>
    );
}

export default ImageSlider;
