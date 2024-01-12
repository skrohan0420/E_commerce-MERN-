import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {url} from '../../Config/url'


function Login() {
    const [userData, setUserData] = useState({
        "email": "",
        "password": ""
    })

    let navigate = useNavigate();

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
                navigate('/')
            } else {
                alert('Wrong Email or Password')
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