import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Cart from '../../Components/Cart/Cart'
function Home() {
	return (
		<>
			<Navbar />
			<Cart />
			<main className="main">
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
							<h1 className="home__title">NEW WATCH <br/> COLLECTIONS B720</h1>
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
			</main>
		</>
	)
}

export default Home