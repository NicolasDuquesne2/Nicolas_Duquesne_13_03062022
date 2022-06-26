import React, { useEffect } from "react"
import { useForm } from "react-hook-form"
import { useSelector, useDispatch } from "react-redux/es/exports"
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'
import { setLogin } from '../../Redux/Login/action'
import { setErrMessHtml } from '../../Redux/FormErrMessHTML/action'
import { setRememberMe } from "../../Redux/RememberMe/action"
import { setIds } from "../../Redux/Ids/action"
import { setProfileDatas } from "../../Redux/ProfileDatas/action"
import Header from "../../Components/Header"
import Footer from "../../Components/Footer"
import useErrorsMessages from "../../Hooks/ErrorsMessages"
import './signin.css'

function SignIn() {
    const apiRes = useSelector(state => state.logInReducer)
    const formErrorMessagehtml = useSelector(state => state.ErrMessHtmlReducer.data)
    const rememberMe = useSelector(state => state.RememberMeReducer.data)
    const ids = useSelector(state => state.IdsReducer.data)
    const dispatch = useDispatch() 
    let navigate = useNavigate()
    const { register, handleSubmit , setValue, formState: {errors} } = useForm()
    let userNameError = ''
    let userPWError = ''
    const formErrorMessage = useErrorsMessages(apiRes.error)


    const onSubmit = ({username, password, rememberMe}) => {
        rememberMe? dispatch(setRememberMe(true)): dispatch(setRememberMe(false))
        dispatch(setIds({username, password}))
        const dataParams = {method: 'post', url: 'http://localhost:3001/api/v1/user/login', data: {email: username, password: password}}
        dispatch(setLogin(dataParams))
    }

    errors.username? userNameError = <p className="error-message">{errors.username.message}</p>: userNameError = ''
    errors.password? userPWError = <p className="error-message">{errors.password.message}</p> : userPWError = ''

    useEffect(() => {
        if (apiRes.error) {
            dispatch(setIds(null))
            dispatch(setErrMessHtml(<p className="error-message-form">{formErrorMessage}</p>))
        } else if (!apiRes.isLoading && apiRes.data != null) {
            localStorage.setItem('token', apiRes.data)
            if (rememberMe) {
                localStorage.setItem('mail', ids.username)
                localStorage.setItem('pw', ids.password)
            } else {
                localStorage.removeItem('mail')
                localStorage.removeItem('pw')
            }
            
            const dataParams = {
                method: 'put', 
                url: 'http://localhost:3001/api/v1/user/profile', 
                headers: {
                    Authorization: `Bearer ${apiRes.data}`
                }}
            dispatch(setProfileDatas(dataParams))
            navigate("/user/12")
        } 

        if (apiRes.data === null && localStorage.getItem('mail') && localStorage.getItem('pw')) {
            setValue("rememberMe", true)
            setValue("username", localStorage.getItem('mail'))
            setValue("password", localStorage.getItem('pw'))
        }


    },[apiRes])
    


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
                        <label htmlFor="username">E-mail</label>
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
                <div className="SignIn-footer">
                    <a href="/sign-up">First-Time User</a>
                </div>
            </section>
            </main>
            <Footer />
        </React.Fragment>
    )
}


export default SignIn
