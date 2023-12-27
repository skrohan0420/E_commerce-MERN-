import React from 'react'

function UserReviewCard() {
    return (
        <div className='user-review-bx'>
            <div className='userImgBx'>
                <img src="https://eliteadmin.themedesigner.in/demos/bt4/assets/images/users/1.jpg" alt="" />
            </div>

            <div className='rating-review'>
                <span>
                    Sk Rohan
                </span>
                <span className='stars-bx'>
                    <i className='bx bxs-star'></i>
                    <i className='bx bxs-star'></i>
                    <i className='bx bxs-star'></i>
                    <i className='bx bxs-star'></i>
                    <i className='bx bxs-star'></i>
                </span>
                <span>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati,
                    assumenda nemo. Accusantium, animi ipsam porro perspiciatis expedita
                    perferendis sequi debitis ipsum obcaecati, omnis necessitatibus vitae
                    veniam quaerat maxime ullam fuga.
                </span>
            </div>

            <div className='dateBx'>
                <span>12 may</span>
            </div>
        </div>
    )
}

export default UserReviewCard