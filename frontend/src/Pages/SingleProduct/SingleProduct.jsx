import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import ImageSlider from '../../Components/Slider/ImageSlider';
import './SingleProduct.css'
import UserReviewCard from '../../Components/Card/UserReviewCard';

function SingleProduct() {
    const images = [
        {
            imgURL:
                `data:image/png;base64,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`,
            imgAlt: "img-1"
        },
        {
            imgURL:
                `${process.env.PUBLIC_URL}/assets/img/new2.png`,
            imgAlt: "img-1"
        },
        {
            imgURL:
                `${process.env.PUBLIC_URL}/assets/img/new2.png`,
            imgAlt: "img-1"
        },
        {
            imgURL:
                `${process.env.PUBLIC_URL}/assets/img/new2.png`,
            imgAlt: "img-1"
        }

    ];


    return (
        <>
            <Navbar />
            <div className='main poduct-page'>
                <div className='slider-review'>
                    <div className='sliderBxCon'>
                        <div className='sliderBx'>
                            <ImageSlider>
                                {images.map((image, index) => {
                                    return <img key={index} src={image.imgURL} alt={image.imgAlt} />;
                                })}
                            </ImageSlider>
                        </div>
                    </div>

                    <div className='reviewBx'>

                        <h1 className='revTitle'>Reviews</h1>

                        <div className='ratingBx'>
                            <div>
                                <span className='stars-bx'>
                                    <i className='bx bxs-star'></i>
                                    <i className='bx bxs-star'></i>
                                    <i className='bx bxs-star'></i>
                                    <i className='bx bxs-star'></i>
                                    <i className='bx bxs-star'></i>
                                </span>
                                <span className='rating-text'>
                                    4.6
                                </span>
                            </div>
                        </div>

                        <hr />

                        <div className='userRatingsBx'>
                           <UserReviewCard />
                           <UserReviewCard />
                        </div>
                    </div>
                </div>

                
                <div className='details-similer'>


                    <div className='product-details-bx'>
                        <div className='product-title-price'>
                            <h1>Poduct Name</h1>
                            <p className='product-price'>$ 3,444</p>
                        </div>
                        <div className='product-act-btn-bx'>
                            <button className='cartBtn'>Add to Cart</button>
                            <button className='buyBtn'>Buy it Now</button>
                            <button className='loveBtn'>
                                <i className='bx bxs-heart'></i>
                            </button>
                        </div>
                        <hr />

                        <div className='product-spec-bx'>

                            <div className='product-type'>
                                <p>
                                    Color: blue
                                </p>
                            </div>

                            <div className='product-del'>
                                <p>
                                    <i className='bx bxs-calendar'></i>
                                    Delivery from sweden, 15-45 days
                                </p>
                            </div>

                            <div className='product-desc'>
                                <h3>Description</h3>
                                <p>
                                    The minimalist collaboration features chairs, 
                                    lightening, Shelves, Sofas, Desks and various home accessories,
                                    all offering form and function at the same point.We use high-strength 
                                    lamps and joinery techniques specially designed for engineered wood beds. 
                                    Ergo, no irksome creaks - and you can sleep like a baby, well into adulthood!
                                </p>
                            </div>

                            <div className='product-points'>
                                <ul>
                                    <li>Best in Quality</li>
                                    <li>Sturdy laminate surfaces</li>
                                    <li>Relocation friendly design</li>
                                    <li>High gloss, high style</li>
                                    <li>Easy-access hydraulic storage</li>
                                </ul>
                            </div>

                            <div className='product-store'>
                                <h3>Store</h3>
                                <div className='product-storeBx'>
                                    <i className='bx bxs-store store-icon'></i>
                                    <div>
                                        <div className='star-bx'>
                                            <i className='bx bxs-star'></i>
                                            <i className='bx bxs-star'></i>
                                            <i className='bx bxs-star'></i>
                                            <i className='bx bxs-star'></i>
                                            <i className='bx bxs-star'></i>
                                        </div>
                                        <h2>Rare Boutique</h2>
                                        <p>25K Followers</p>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>


                </div>
            </div>
            <Footer />
        </>
    )
}

export default SingleProduct