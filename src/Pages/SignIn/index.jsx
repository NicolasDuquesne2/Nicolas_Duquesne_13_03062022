import React, { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { useSelector, useDispatch } from "react-redux/es/exports"
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'
import { apiCall } from '../../Redux/Login/action'
import Header from "../../Components/Header"
import Footer from "../../Components/Footer"
import useErrorsMessages from "../../Hooks/ErrorsMessages"
import './signin.css'

function SignIn() {


    const apiRes = useSelector(state => state.logInReducer)
    const dispatch = useDispatch() 
    const { register, handleSubmit ,formState: {errors} } = useForm()

    let navigate = useNavigate()
    let userNameError = ''
    let userPWError = ''
    const formErrorMessage = useErrorsMessages(apiRes.error)
    const [formErrorMessagehtml, setFormErrorMessagehtml] = useState(null)
    const [rememberMe, setRememberMe] = useState(false)

    const onSubmit = ({username, password, rememberMe}) => {
        const dataParams = {method: 'post', url: 'http://localhost:3001/api/v1/user/login', data: {email: username, password: password}}
        setRememberMe(rememberMe)
        dispatch(apiCall(dataParams))
    }

    errors.username? userNameError = <p className="error-message">{errors.username.message}</p>: userNameError = ''
    errors.password? userPWError = <p className="error-message">{errors.password.message}</p> : userPWError = ''

    useEffect(() => {
        if (apiRes.error) {
            setFormErrorMessagehtml(<p className="error-message-form">{formErrorMessage}</p>)
        } else if (!apiRes.isLoading && apiRes.data != null) {
            if (rememberMe) {
                console.log('remember me')
            }
            localStorage.setItem('token', apiRes.data);
            navigate("/user/12")
        }
    },[setFormErrorMessagehtml, apiRes])
    


    return (
        <React.Fragment>
            <Header signOut={false} />
            <main className="main bg-dark">
            <section className="sign-in-content">
                <FontAwesomeIcon icon={faCircleUser} />
                <h1 className="signIn-title">Sign In</h1>
                {formErrorMessagehtml}
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
                        <input type="checkbox" id="remember-me" {...register("rememberMe")}/>
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


export default SignIn
