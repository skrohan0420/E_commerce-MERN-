import React from 'react'
import { Link } from 'react-router-dom'

function ProductCardSale() {
	return (
		<Link to="/product/1">
			<article className="featured__card">
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