import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { url } from '../../Config/url'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {
    const [userData, setUserData] = useState({
        "email": "",
        "password": ""
    })
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await fetch(`${url.dev.backEnd}api/user/log-in`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    "email": userData.email,
                    "password": userData.password
                })

            })
            const json = await response.json()

            if (json.success) {
                localStorage.setItem("authToken", json.authToken)
                localStorage.setItem("userId", json.userId)
                console.log(json)
                navigate('/')
            } else {
                toast.error('Wrong Email or Password', {
                    position: "top-center",
                })
            }
        } catch (err) {
            console.log(err)
        }


    }

    const onChange = (event) => {
        setUserData({ ...userData, [event.target.name]: event.target.value });
    };


    return (
        <>


            <section className='login-page'>
                <ToastContainer />
                <div className="signin">
                    <div className="content">
                        <h2>Sign In</h2>
                        <form onSubmit={handleSubmit} className="form">
                            <div className="inputBox">
                                <input type="text" required name="email" value={userData.email} onChange={onChange} /> <i>Email</i>

                            </div>
                            <div className="inputBox">
                                <input type="password" required name="password" value={userData.password} onChange={onChange} /> <i>Password</i>
                            </div>
                            <div className="links">
                                <Link></Link>
                                <Link to="/sign-up">Sign Up</Link>
                            </div>
                            <div className="inputBox">
                                <input type="submit" value="Login" />
                            </div>
                        </form >
                    </div>
                </div>
            </section>



        </>

    )
}

export default Login