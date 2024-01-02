import React from 'react'
import { Link } from 'react-router-dom';
function Footer() {
    return (
        <>
            {/* ==================== FOOTER ==================== */}
            <footer className="footer section">
                <div className="footer__container container grid">
                    <div className="footer__content">
                        <h3 className="footer__title">Our information</h3>

                        <ul className="footer__list">
                            <li>1234 - india</li>
                            <li>west bengal 43210</li>
                            <li>123-456-789</li>
                        </ul>
                    </div>
                    <div className="footer__content">
                        <h3 className="footer__title">About Us</h3>

                        <ul className="footer__links">
                            <li>
                                <a href="#" className="footer__link">Support Center</a>
                            </li>
                            <li>
                                <a href="#" className="footer__link">Customer Support</a>
                            </li>
                            <li>
                                <a href="#" className="footer__link">About Us</a>
                            </li>
                            <li>
                                <a href="#" className="footer__link">Copy Right</a>
                            </li>
                        </ul>
                    </div>

                    <div className="footer__content">
                        <h3 className="footer__title">Product</h3>

                        <ul className="footer__links">
                            <li>
                                <a href="#" className="footer__link">Road bikes</a>
                            </li>
                            <li>
                                <a href="#" className="footer__link">Mountain bikes</a>
                            </li>
                            <li>
                                <a href="#" className="footer__link">Electric</a>
                            </li>
                            <li>
                                <a href="#" className="footer__link">Accesories</a>
                            </li>
                        </ul>
                    </div>

                    <div className="footer__content">
                        <h3 className="footer__title">Social</h3>

                        <ul className="footer__social">
                            <a href="https://www.facebook.com/" target="_blank" className="footer__social-link">
                                <i className='bx bxl-facebook'></i>
                            </a>

                            <a href="https://twitter.com/" target="_blank" className="footer__social-link">
                                <i className='bx bxl-twitter' ></i>
                            </a>

                            <a href="https://www.instagram.com/" target="_blank" className="footer__social-link">
                                <i className='bx bxl-instagram' ></i>
                            </a>
                        </ul>
                    </div>
                </div>

                <span className="footer__copy">&#169; SK ROHAN ALI. All rigths reserved</span>
            </footer>

            {/* =============== SCROLL UP =============== */}
            <Link to='/' className="scrollup" id="scroll-up">
                <i className='bx bx-up-arrow-alt scrollup__icon' ></i>
            </Link>
        </>
    )
}

export default Footer
