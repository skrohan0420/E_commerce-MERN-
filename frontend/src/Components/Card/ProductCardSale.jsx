import React from 'react'

function ProductCardSale() {
	return (
		<article className="featured__card">
			<span className="featured__tag">Sale</span>

			<img src={`${process.env.PUBLIC_URL}/assets/img/home.png`} alt="" className="featured__img" />

			<div className="featured__data">
				<h3 className="featured__title">Jazzmaster</h3>
				<span className="featured__price">$1050</span>
			</div>

			<button className="button featured__button">ADD TO CART</button>
		</article>

	)
}

export default ProductCardSale