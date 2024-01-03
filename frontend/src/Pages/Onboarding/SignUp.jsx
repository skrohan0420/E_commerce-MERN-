import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import { Link } from 'react-router-dom'
function SignUp() {
    return (
        <>


        <section className='login-page'>
            <div className="signin">
                <div className="content">
                    <h2>Sign Up</h2>
                    <div className="form">
                        <div className="inputBox">
                            <input type="text" required /> <i>Username</i>

                        </div>
                        <div className="inputBox">
                            <input type="email" required /> <i>Email</i>

                        </div>
                        <div className="inputBox">
                            <input type="password" required /> <i>Password</i>
                        </div>
                        <div className="inputBox">
                            <input type="password" required /> <i>Confirm Password</i>
                        </div>
                        <div className="links">
                            <Link></Link>
                            <Link to="/log-in">Login</Link>
                        </div>
                        <div className="inputBox">
                            <input type="submit" value="Signup" />
                        </div>
                    </div>
                </div>
            </div>
        </section>


    </>
            )
}

            export default SignUp