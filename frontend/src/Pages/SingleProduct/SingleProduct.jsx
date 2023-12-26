import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import ImageSlider from '../../Components/Slider/ImageSlider';


function SingleProduct() {
    const images = [
        {
            imgURL:
                `${process.env.PUBLIC_URL}/assets/img/new1.png`,
            imgAlt: "img-1"
        },
        {
            imgURL:
                `${process.env.PUBLIC_URL}/assets/img/new2.png`,
            imgAlt: "img-1"
        },
        {
            imgURL:
                `${process.env.PUBLIC_URL}/assets/img/new3.png`,
            imgAlt: "img-1"
        },
    ];


    return (
        <>
            <Navbar />
            <div className='main poduct-page'>
                <div className='slider-review'>
                    <div className='sliderBx'>
                        <ImageSlider>
                            {images.map((image, index) => {
                                return <img key={index} src={image.imgURL} alt={image.imgAlt} />;
                            })}
                        </ImageSlider>
                    </div>
                    <div className='reviewBx'>

                    </div>
                </div>
                <div className='details-similer'>

                </div>
            </div>
            <Footer />
        </>
    )
}

export default SingleProduct