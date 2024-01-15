import React from 'react'
import './ProductCardSimilar.css'
import { Link } from 'react-router-dom'
import { DarkModeContext } from '../../Context/darkModeContext';
import { useContext } from 'react';
import { theme } from '../../Config/theme';
function ProductCardSimilar(props) {
    const { darkMode } = useContext(DarkModeContext);

    return (
        <Link>
            <article className="card" style={{ backgroundColor: darkMode ? theme.dark.bg : theme.light.bg }}>
                <figure className="card-image">
                    <img src={`${process.env.PUBLIC_URL}/assets/img/new2.png`} alt="An orange painted blue, cut in half laying on a blue background" />
                </figure>
                <div className="card-header">
                    <h1 style={{ color: darkMode ? theme.dark.textLight : theme.light.textLight }}>
                        Product Name
                    </h1>
                    <div className="card-meta card-meta--views" style={{ color: darkMode ? theme.dark.textLight : theme.light.textLight }}>  
                        <i className='bx bx-rupee'></i>       
                        999
                    </div>
                </div>
                <div className="card-footer" style={{ color: darkMode ? theme.dark.textLight : theme.light.textLight }}>
                
                    <span className='stars-bx' >
                        <i className='bx bxs-star'></i>
                        <i className='bx bxs-star'></i>
                        <i className='bx bxs-star'></i>
                        <i className='bx bxs-star'></i>
                        <i className='bx bxs-star'></i>
                        <span className='rating-text'>
                            4.6
                        </span>
                    </span>
                    <button className="icon-button" >
                        <i className='bx bxs-cart'></i>
                    </button>
                </div>
            </article>
        </Link >

    )
}

export default ProductCardSimilar