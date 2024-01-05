import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { DarkModeContext } from '../../Context/darkModeContext';
import { useContext } from 'react';
import { theme } from '../../Config/theme';

function Navbar() {
    const [isActiveCart, setActiveCart] = useState(false);
    const [isActiveNav, setActiveNav] = useState(false);
    const { toggle, darkMode } = useContext(DarkModeContext);


    const handleClickCart = () => {
        // Toggle the isActiveCart state on each click
        setActiveCart(!isActiveCart);
    };
    const handleClickNav = () => {
        setActiveNav(!isActiveNav)
    }
    return (
        <>
            {/* ========navbar=========== */}
            <header className="header" id="header" style={{backgroundColor: darkMode ? theme.dark.bgLight : theme.light.bg``}}>
                <nav className="nav container">
                    <a href="#" className="nav__logo">
                        <i className='bx bxs-watch nav__logo-icon'></i> Rolex
                    </a>

                    <div className={`nav__menu ${isActiveNav ? 'show-menu' : ''}`} id="nav-menu">
                        <ul className="nav__list">
                            <li className="nav__item">
                                <Link href="#home" className="nav__link active-link">Home</Link>
                            </li>
                            <li className="nav__item">
                                <Link href="#featured" className="nav__link">Featured</Link>
                            </li>
                            <li className="nav__item">
                                <Link href="#products" className="nav__link">Products</Link>
                            </li>
                        </ul>

                        <div className="nav__close" id="nav-close" onClick={handleClickNav}>
                            <i className='bx bx-x' ></i>
                        </div>
                    </div>

                    <div className="nav__btns">
                        {/* Theme change button  */}
                        <i className='bx bx-user change-theme' ></i>
                        <i className={darkMode ? `bx bx-sun change-theme` : `bx bx-moon change-theme`} onClick={toggle}></i>

                        <div className={`nav__shop`} id="cart-shop" onClick={handleClickCart}>
                            <i className='bx bx-shopping-bag' ></i>
                        </div>

                        <div className="nav__toggle" id="nav-toggle" onClick={handleClickNav}>
                            <i className='bx bx-grid-alt' ></i>
                        </div>
                    </div>
                </nav>
            </header>


            {/* side bar cart*/}
            <div className={`cart ${isActiveCart ? 'show-cart' : ''}`} id="cart">
                <i className='bx bx-x cart__close' id="cart-close" onClick={handleClickCart}></i>

                <h2 className="cart__title-center">My Cart</h2>

                <div className="cart__container">
                    <article className="cart__card">
                        <div className="cart__box">
                            <img src={`${process.env.PUBLIC_URL}/assets/img/featured1.png`} alt="" className="cart__img" />
                        </div>

                        <div className="cart__details">
                            <h3 className="cart__title">Jazzmaster</h3>
                            <span className="cart__price">$1050</span>

                            <div className="cart__amount">
                                <div className="cart__amount-content">
                                    <span className="cart__amount-box">
                                        <i className='bx bx-minus' ></i>
                                    </span>

                                    <span className="cart__amount-number">1</span>

                                    <span className="cart__amount-box">
                                        <i className='bx bx-plus' ></i>
                                    </span>
                                </div>

                                <i className='bx bx-trash-alt cart__amount-trash' ></i>
                            </div>
                        </div>
                    </article>

                    <article className="cart__card">
                        <div className="cart__box">
                            <img src={`${process.env.PUBLIC_URL}/assets/img/featured1.png`} alt="" className="cart__img" />
                        </div>

                        <div className="cart__details">
                            <h3 className="cart__title">Jazzmaster</h3>
                            <span className="cart__price">$1050</span>

                            <div className="cart__amount">
                                <div className="cart__amount-content">
                                    <span className="cart__amount-box">
                                        <i className='bx bx-minus' ></i>
                                    </span>

                                    <span className="cart__amount-number">1</span>

                                    <span className="cart__amount-box">
                                        <i className='bx bx-plus' ></i>
                                    </span>
                                </div>

                                <i className='bx bx-trash-alt cart__amount-trash' ></i>
                            </div>
                        </div>
                    </article>
                </div>

                <hr />

                <div className="cart__prices">
                    <span className="cart__prices-item">3 items</span>
                    <span className="cart__prices-total">$2880</span>
                </div>
                <div className='cart_checkoutBx'>
                    <button className="button">
                        Check Out <i className='bx bx-right-arrow-alt'></i>
                    </button>
                </div>
            </div>

            {/* user details sidebar*/}
            <div className={`cart ${isActiveCart ? 'show-cart' : ''}`} id="cart">
                <i className='bx bx-x cart__close' id="cart-close" onClick={handleClickCart}></i>

                <h2 className="cart__title-center">Sk Rohan</h2>

                <div className="cart__container">
                    <article className="cart__card">
                        <div className="cart__box">
                            <img src={`${process.env.PUBLIC_URL}/assets/img/featured1.png`} alt="" className="cart__img" />
                        </div>

                        <div className="cart__details">
                            <h3 className="cart__title">Jazzmaster</h3>
                            <span className="cart__price">$1050</span>

                            <div className="cart__amount">
                                <div className="cart__amount-content">
                                    <span className="cart__amount-box">
                                        <i className='bx bx-minus' ></i>
                                    </span>

                                    <span className="cart__amount-number">1</span>

                                    <span className="cart__amount-box">
                                        <i className='bx bx-plus' ></i>
                                    </span>
                                </div>

                                <i className='bx bx-trash-alt cart__amount-trash' ></i>
                            </div>
                        </div>
                    </article>

                    <article className="cart__card">
                        <div className="cart__box">
                            <img src={`${process.env.PUBLIC_URL}/assets/img/featured1.png`} alt="" className="cart__img" />
                        </div>

                        <div className="cart__details">
                            <h3 className="cart__title">Jazzmaster</h3>
                            <span className="cart__price">$1050</span>

                            <div className="cart__amount">
                                <div className="cart__amount-content">
                                    <span className="cart__amount-box">
                                        <i className='bx bx-minus' ></i>
                                    </span>

                                    <span className="cart__amount-number">1</span>

                                    <span className="cart__amount-box">
                                        <i className='bx bx-plus' ></i>
                                    </span>
                                </div>

                                <i className='bx bx-trash-alt cart__amount-trash' ></i>
                            </div>
                        </div>
                    </article>
                </div>

                <hr />

                <div className="cart__prices">
                    <span className="cart__prices-item">3 items</span>
                    <span className="cart__prices-total">$2880</span>
                </div>
                <div className='cart_checkoutBx'>
                    <button className="button">
                        Check Out <i className='bx bx-right-arrow-alt'></i>
                    </button>
                </div>
            </div>
        </>
    )
}

export default Navbar