import React from 'react'
import { DarkModeContext } from '../../Context/darkModeContext';
import { useContext } from 'react';
import { theme } from '../../Config/theme';


function CartItems() {
    const { darkMode } = useContext(DarkModeContext);
    return (
        <article className="cart__card"  style={{backgroundColor: darkMode ? theme.dark.bgLight : theme.light.bg}}>
            <div className="cart__box"  style={{backgroundColor: darkMode ? theme.dark.bgLight : theme.light.bg}}>
                <img src={`${process.env.PUBLIC_URL}/assets/img/featured1.png`} alt="" className="cart__img" />
            </div>

            <div className="cart__details">
                <h3 className="cart__title" style={{color: darkMode ? theme.dark.textLight : theme.light.textLight}}>Jazzmaster</h3>
                <span className="cart__price">$1050</span>

                <div className="cart__amount">
                    <div className="cart__amount-content">
                        <span className="cart__amount-box"  style={{backgroundColor: darkMode ? theme.dark.bgLight : theme.light.bg}}>
                            <i className='bx bx-minus' style={{color: darkMode ? theme.dark.textLight : theme.light.textLight}}></i>
                        </span>

                        <span className="cart__amount-number" style={{color: darkMode ? theme.dark.textLight : theme.light.textLight}}>1</span>

                        <span className="cart__amount-box"  style={{backgroundColor: darkMode ? theme.dark.bgLight : theme.light.bg}}>
                            <i className='bx bx-plus' style={{color: darkMode ? theme.dark.textLight : theme.light.textLight}} ></i>
                        </span>
                    </div>

                    <i className='bx bx-trash-alt cart__amount-trash' ></i>
                </div>
            </div>
        </article>
    )
}

export default CartItems