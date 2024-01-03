import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import { Link } from 'react-router-dom'
function Login() {
    return (
        <>


            <section className='login-page'>
                <div className="signin">
                    <div className="content">
                        <h2>Sign In</h2>
                        <div className="form">
                            <div className="inputBox">
                                <input type="text" required /> <i>Username</i>

                            </div>
                            <div className="inputBox">
                                <input type="password" required /> <i>Password</i>
                            </div>
                            <div className="links">
                                <Link></Link>
                                <Link to="/sign-up">Sign Up</Link>
                            </div>
                            <div className="inputBox">
                                <input type="submit" value="Login" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        

        </>
        
    )
}

export default Login