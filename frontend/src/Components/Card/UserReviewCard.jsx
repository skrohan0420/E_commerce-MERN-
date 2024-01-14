import React from 'react'
import './UserReviewCard.css'
import { DarkModeContext } from '../../Context/darkModeContext';
import { useContext } from 'react';
import { theme } from '../../Config/theme';

function UserReviewCard() {
	const {darkMode } = useContext(DarkModeContext);

    return (
        <div className='user-review-bx' style={{backgroundColor: darkMode ? theme.dark.bg : theme.light.bg}}>
            <div className='userImgBx'>
                <img src="https://eliteadmin.themedesigner.in/demos/bt4/assets/images/users/1.jpg" alt="" />
            </div>

            <div className='rating-review' style={{color: darkMode ? theme.dark.textLight : theme.light.textLight}}>
                <h1 style={{color: darkMode ? theme.dark.textLight : theme.light.textLight}}>
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