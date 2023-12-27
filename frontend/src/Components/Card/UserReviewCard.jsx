import React from 'react'
import './UserReviewCard.css'
function UserReviewCard() {
    return (
        <div className='user-review-bx'>
            <div className='userImgBx'>
                <img src="https://eliteadmin.themedesigner.in/demos/bt4/assets/images/users/1.jpg" alt="" />
            </div>

            <div className='rating-review'>
                <h1>
                    Sk Rohan
                </h1>
                <p className='stars-bx'>
                    <i className='bx bxs-star'></i>
                    <i className='bx bxs-star'></i>
                    <i className='bx bxs-star'></i>
                    <i className='bx bxs-star'></i>
                    <i className='bx bxs-star'></i>
                </p>
                <p className='desc'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati,
                </p>
            </div>

            <div className='dateBx'>
                <p>12 JAN</p>
            </div>
        </div>
    )
}

export default UserReviewCard