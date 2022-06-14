import React, { useRef } from "react"
import { useForm } from "react-hook-form"
import { connect } from "react-redux/es/exports"
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'
import { apiCall } from '../../Redux/SignIn/action'
import Header from "../../Components/Header"
import Footer from "../../Components/Footer"
import './signin.css'

function SignIn({apiRes, apiCall}) {

    const { register, handleSubmit, formState: {errors} } = useForm()
    let navigate = useNavigate()
    let userNameError = ''
    let userPWError = ''

    const onSubmit = data => console.log(data)

    errors.username? userNameError = <p className="error-message">{errors.username.message}</p>: userNameError = ''
    errors.password? userPWError = <p className="error-message">{errors.password.message}</p> : userPWError = ''


    function clickSignInButton(e) {
        e.preventDefault()

        apiCall({email: "steve@rogers.com", password: "password456"})

        if (apiRes.isLoading) {
            console.log('loading')
        }else if (apiRes.error) {
            return (
                console.log(apiRes.error)
            )
        } else if (!apiRes.isLoading) {
            return (
                console.log(apiRes)
            )
        }
        //navigate("/user/12")
    }


    return (
        <React.Fragment>
            <Header signOut={false}/>
            <main className="main bg-dark">
            <section className="sign-in-content">
                <FontAwesomeIcon icon={faCircleUser} />
                <h1>Sign In</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="input-wrapper">
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" {...register("username", {required: "Please, enter a valid email"})}/>
                        {userNameError}
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" {...register("password", {required: "Please, enter a valid pass word"})}/>
                        {userPWError}
                    </div>
                    <div className="input-remember">
                        <input type="checkbox" id="remember-me" {...register("remember-me")}/>
                        <label htmlFor="remember-me">Remember me</label>
                    </div>
                    <input type="submit" className="sign-in-button" value="Sign in"/>
                </form>
            </section>
            </main>
            <Footer />
        </React.Fragment>
    )
}

const mapStateToProps = state => {
    return {
        apiRes: state.postIdReducer
    }
}


const mapDispatchToProps = dispatch => {
    return {
        apiCall: (data) => dispatch(apiCall(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
