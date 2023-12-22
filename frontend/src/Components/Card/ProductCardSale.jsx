import React from 'react'

function ProductCardSale() {
	return (
		<article class="featured__card">
			<span class="featured__tag">Sale</span>

			<img src={`${process.env.PUBLIC_URL}/assets/img/home.png`} alt="" class="featured__img" />

			<div class="featured__data">
				<h3 class="featured__title">Jazzmaster</h3>
				<span class="featured__price">$1050</span>
			</div>

			<button class="button featured__button">ADD TO CART</button>
		</article>

	)
}

export default ProductCardSale