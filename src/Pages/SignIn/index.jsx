import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'
import Header from "../../Components/Header"
import Footer from "../../Components/Footer"
import './signin.css'

function SignIn() {
    return (
        <React.Fragment>
            <Header signOut={false}/>
            <main className="main bg-dark">
            <section className="sign-in-content">
                    <FontAwesomeIcon icon={faCircleUser} />
                    <h1>Sign In</h1>
                    <form>
                    <div className="input-wrapper">
                            <label htmlFor="username">Username</label>
                            <input type="text" id="username" />
                        </div>
                        <div className="input-wrapper">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" />
                        </div>
                        <div className="input-remember">
                            <input type="checkbox" id="remember-me" />
                            <label htmlFor="remember-me">Remember me</label>
                        </div>
                        <a href="/user/12" className="sign-in-button">Sign In</a>
                    </form>
                </section>
            </main>
            <Footer />
        </React.Fragment>
    )
}

export default SignIn
