import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { url } from '../../Config/url'

function SignUp() {
    const navigate = useNavigate();

    const [userData, setUserData] = useState({
        "email": "",
        "userName": "",
        "password": "",
        "conPass": ""
    })

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (userData.password == userData.conPass) {
            try {
                const response = await fetch(`${url.dev.backEnd}api/user/create-user`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        "name": userData.userName,
                        "email": userData.email,
                        "password": userData.password
                    })
                })
                const json = await response.json()

                if (json.success) {
                    console.log(json)
                    toast.success(json.message + " Sign In", {
                        position: "top-center",
                    })
                    setUserData({
                        "email": "",
                        "userName": "",
                        "password": "",
                        "conPass": ""
                    });
                    setTimeout(() => {
                        navigate('/log-in')
                    }, 5000)
                } else {
                    toast.error(json.message, {
                        position: "top-center",
                    })
                }


            } catch (err) {

                console.log(err)
            }
        } else if (userData.password.length < 6) {
            toast.error('Passwords to short', {
                position: "top-center",
            })
        } else {
            toast.error('Passwords Dont match', {
                position: "top-center",
            })

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
                        <h2>Sign Up</h2>
                        <form className="form" onSubmit={handleSubmit}>
                            <div className="inputBox" >
                                <input type="text" required name="userName" value={userData.userName} onChange={onChange} /> <i>Username</i>

                            </div>
                            <div className="inputBox">
                                <input type="email" required name="email" value={userData.email} onChange={onChange} /> <i>Email</i>

                            </div>
                            <div className="inputBox">
                                <input type="password" required name="password" value={userData.password} onChange={onChange} /> <i>Password</i>

                            </div>
                            <div className="inputBox">
                                <input type="password" required name="conPass" value={userData.conPass} onChange={onChange} /> <i>Confirm Password</i>
                            </div>
                            <div className="links">
                                <Link></Link>
                                <Link to="/log-in">Login</Link>
                            </div>
                            <div className="inputBox">
                                <input type="submit" value="Signup" />
                            </div>
                        </form>
                    </div>
                </div>
            </section>


        </>
    )
}

export default SignUp