import React, { useEffect, useState } from 'react';
import Navbar from '../../Components/Navbar/Navbar'
import ProductCardSale from '../../Components/Card/ProductCardSale'
import Footer from '../../Components/Footer/Footer';
function Home() {


	return (
		<>
			<Navbar />
			<main className="main">
				{/* ============Home============ */}
				<section className="home" id="home">
					<div className="home__container container grid">
						<div className="home__img-bg">
							<img src={`${process.env.PUBLIC_URL}/assets/img/home.png`} alt="" className="home__img" />
						</div>

						<div className="home__social">
							<a href="https://www.facebook.com/" target="_blank" className="home__social-link">
								Facebook
							</a>
							<a href="https://twitter.com/" target="_blank" className="home__social-link">
								Twitter
							</a>
							<a href="https://www.instagram.com/" target="_blank" className="home__social-link">
								Instagram
							</a>
						</div>

						<div className="home__data">
							<h1 className="home__title">NEW WATCH <br /> COLLECTIONS B720</h1>
							<p className="home__description">
								Latest arrival of the new imported watches of the B720 series,
								with a modern and resistant design.
							</p>
							<span className="home__price">$1245</span>

							<div className="home__btns">
								<a href="#" className="button button--gray button--small">
									Discover
								</a>

								<button className="button home__button">ADD TO CART</button>
							</div>
						</div>
					</div>
				</section>



				{/* ============FEATURED============ */}
				<section className="featured section container" id="featured">
					<h2 className="section__title">
						Featured
					</h2>

					<div className="featured__container grid">
						<ProductCardSale />
						<ProductCardSale />
						<ProductCardSale />
					</div>
				</section>



				{/* ============STORY============ */}
				<section className="story section container">
					<div className="story__container grid">
						<div className="story__data">
							<h2 className="section__title story__section-title">
								Our Story
							</h2>

							<h1 className="story__title">
								Inspirational Watch of <br /> this year
							</h1>

							<p className="story__description">
								The latest and modern watches of this year, is available in various
								presentations in this store, discover them now.
							</p>

							<a href="#" className="button button--small">Discover</a>
						</div>

						<div className="story__images">
							<img src={`${process.env.PUBLIC_URL}/assets/img/story.png`} alt="" className="story__img" />
							<div className="story__square"></div>
						</div>
					</div>
				</section>
			</main>
			<Footer />

		</>
	)
}

export default Home