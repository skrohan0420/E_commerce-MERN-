import React from 'react'
import { Link } from 'react-router-dom'
import { DarkModeContext } from '../../Context/darkModeContext';
import { useContext } from 'react';
import { theme } from '../../Config/theme';

function ProductCardSale() {

	const {darkMode } = useContext(DarkModeContext);

	return (
		<Link to="/product/1" >
			<article className="featured__card" style={{backgroundColor: darkMode ? theme.dark.bgLight : theme.light.bg}}>
				<span className="featured__tag">Sale</span>

				<img src={`${process.env.PUBLIC_URL}/assets/img/home.png`} alt="" className="featured__img" />

				<div className="featured__data">
					<h3 className="featured__title">Jazzmaster</h3>
					<span className="featured__price">$1050</span>
				</div>

				<button className="button featured__button">ADD TO CART</button>
			</article>
		</Link>

	)
}

export default ProductCardSale