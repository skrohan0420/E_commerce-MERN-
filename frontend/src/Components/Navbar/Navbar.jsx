import React, {  useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { DarkModeContext } from '../../Context/darkModeContext';
import { useContext } from 'react';
import { theme } from '../../Config/theme';
import CartItems from '../../Components/CartItems/CartItems'


function Navbar() {
    const [isActiveCart, setActiveCart] = useState(false);
    const [isActiveNav, setActiveNav] = useState(false);
    const [isActiveUserSideBar, setActiveUserSideBar] = useState(false);
    const { toggle, darkMode } = useContext(DarkModeContext);
    let currentUser = localStorage.getItem('authToken')
    useEffect(()=>{
        if (!currentUser) {
            navigate('/log-in')
		}
    }, [])

    const handleClickCart = () => {
        // Toggle the isActiveCart state on each click
        setActiveCart(!isActiveCart);
    };
    const handleClickNav = () => {
        setActiveNav(!isActiveNav)
    }
    const handleClickUserSideBar = () => {
        setActiveUserSideBar(!isActiveUserSideBar)
    }
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem('authToken')
        localStorage.removeItem('darkMode')
        localStorage.removeItem('userId')
        navigate('/log-in')
    }
    return (
        <>
            {/* ========navbar=========== */}
            <header className="header" id="header" style={{backgroundColor: darkMode ? theme.dark.bgLight : theme.light.bg}}>
                <nav className="nav container">
                    <a href="#" className="nav__logo " style={{color: darkMode ? theme.dark.textLight : theme.light.textLight}}>
                        <i className='bx bxs-watch nav__logo-icon' ></i> Rolex
                    </a>

                    <div className={`nav__menu ${isActiveNav ? 'show-menu' : ''}`} id="nav-menu" style={{backgroundColor: darkMode ? theme.dark.bgLight : theme.light.bg}}>
                        <ul className="nav__list" >
                            <li className="nav__item" >
                                <Link href="#home" className="nav__link " style={{color: darkMode ? theme.dark.textLight : theme.light.textLight}}>Home</Link>
                            </li>
                            <li className="nav__item">
                                <Link href="#featured" className="nav__link" style={{color: darkMode ? theme.dark.textLight : theme.light.textLight}}>Featured</Link>
                            </li>
                            <li className="nav__item">
                                <Link href="#products" className="nav__link" style={{color: darkMode ? theme.dark.textLight : theme.light.textLight}}>Products</Link>
                            </li>
                        </ul>

                        <div className="nav__close" id="nav-close" onClick={handleClickNav}>
                            <i className='bx bx-x' style={{color: darkMode ? theme.dark.textLight : theme.light.textLight}}></i>
                        </div>
                    </div>

                    <div className="nav__btns">
                        {/* Theme change button  */}
                        <i className='bx bx-user change-theme' style={{color: darkMode ? theme.dark.textLight : theme.light.textLight}} onClick={handleClickUserSideBar}></i>
                        <i className={darkMode ? `bx bx-sun change-theme` : `bx bx-moon change-theme`} style={{color: darkMode ? theme.dark.textLight : theme.light.textLight}}onClick={toggle}></i>

                        <div className={`nav__shop`} id="cart-shop" onClick={handleClickCart}>
                            <i className='bx bx-shopping-bag'style={{color: darkMode ? theme.dark.textLight : theme.light.textLight}} ></i>
                        </div>

                        <div className="nav__toggle" id="nav-toggle" onClick={handleClickNav}>
                            <i className='bx bx-grid-alt' style={{color: darkMode ? theme.dark.textLight : theme.light.textLight}}></i>
                        </div>
                    </div>
                </nav>
            </header>


            {/* side bar cart*/}
            <div className={`cart ${isActiveCart ? 'show-cart' : ''}`} id="cart" style={{backgroundColor: darkMode ? theme.dark.bgLight : theme.light.bg}}>
                <i className='bx bx-x cart__close' id="cart-close" onClick={handleClickCart} style={{color: darkMode ? theme.dark.textLight : theme.light.textLight}}></i>

                <h2 className="cart__title-center" style={{color: darkMode ? theme.dark.textLight : theme.light.textLight}}>My Cart</h2>

                <div className="cart__container" >
                    <CartItems />
                    <CartItems />
                </div>

                <hr />

                <div className="cart__prices">
                    <span className="cart__prices-item" style={{color: darkMode ? theme.dark.textLight : theme.light.textLight}}>3 items</span>
                    <span className="cart__prices-total" style={{color: darkMode ? theme.dark.textLight : theme.light.textLight}}>$2880</span>
                </div>
                <div className='cart_checkoutBx' >
                    <button className="button" style={{backgroundColor: darkMode ? theme.dark.bg : theme.light.bg}} >
                        Check Out <i className='bx bx-right-arrow-alt'></i>
                    </button>
                </div>
            </div>


            {/* user details sidebar*/}
            <div className={`cart ${isActiveUserSideBar ? 'show-cart' : ''}`} style={{backgroundColor: darkMode ? theme.dark.bgLight : theme.light.bg}}>
                <i className='bx bx-x cart__close '  onClick={handleClickUserSideBar} style={{color: darkMode ? theme.dark.textLight : theme.light.textLight}}></i>
                <div className="cart__box userImg"  style={{backgroundColor: darkMode ? theme.dark.bgLight : theme.light.bg}}>
                    <img src={`${process.env.PUBLIC_URL}/assets/img/featured1.png`} alt="" className="cart__img " />
                </div>
                <h2 className="cart__title-center" style={{color: darkMode ? theme.dark.textLight : theme.light.textLight}}>Sk Rohan</h2>

                <button className="button logout-btn button--gray" onClick={handleLogout}>
                    Log-out
                </button>
            </div>
        </>
    )
}

export default Navbar