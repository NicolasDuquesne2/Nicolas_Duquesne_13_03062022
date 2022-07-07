import React, { useEffect } from "react"
import { useForm } from "react-hook-form"
import { useSelector, useDispatch } from "react-redux/es/exports"
import { useNavigate } from 'react-router-dom'
import useErrorsMessages from "../../Hooks/ErrorsMessages"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'
import { setErrMessHtml } from '../../Redux/FormErrMessHTML/action'
import { setRememberMe } from "../../Redux/RememberMe/action"
import { setIds } from "../../Redux/Ids/action"
import { setCreation } from "../../Redux/SignUp/action"
import Header from "../../Components/Header"
import Footer from "../../Components/Footer"

function SignUp() {

    const { register, handleSubmit, formState: {errors} } = useForm()

    const apiRes = useSelector(state => state.SignUpReducer)
    const formErrorMessagehtml = useSelector(state => state.ErrMessHtmlReducer.data)
    const rememberMe = useSelector(state => state.RememberMeReducer.data)
    const ids = useSelector(state => state.IdsReducer.data)
    const dispatch = useDispatch()
    const formErrorMessage = useErrorsMessages(apiRes.error)
    const navigate = useNavigate()

    let userFirstNameError = ''
    let userNameError = ''
    let usermailError = ''
    let userPWError = ''

    const onSubmit = ({userfirtsname, username, usermail , password, rememberMe}) => {
        rememberMe? dispatch(setRememberMe(true)): dispatch(setRememberMe(false))
        dispatch(setIds({usermail, password}))
        const dataParams = {data: {email: usermail, password: password, firstName: userfirtsname, lastName: username}}
        dispatch(setCreation(dataParams))
    }


    useEffect(() => {
        if (apiRes.error) {
            dispatch(setIds(null))
            dispatch(setErrMessHtml(<p className="error-message-form">{formErrorMessage}</p>))
        } else if (!apiRes.isLoading && apiRes.data != null) {
            if (rememberMe) {
                localStorage.setItem('mail', ids.usermail)
                localStorage.setItem('pw', ids.password)
            } else {
                localStorage.removeItem('mail')
                localStorage.removeItem('pw')
            }
            navigate("/sign-in")
        } 

    },[apiRes, ids])


    errors.userfirtsname? userFirstNameError = <p className="error-message">{errors.userfirtsname.message}</p>: userFirstNameError = ''
    errors.username? userNameError = <p className="error-message">{errors.username.message}</p>: userNameError = ''
    errors.usermail? usermailError = <p className="error-message">{errors.usermail.message}</p>: usermailError=''
    errors.password? userPWError = <p className="error-message">{errors.password.message}</p> : userPWError = ''

    return (
        <React.Fragment>
        <Header signOut={false} />
        <main className="main bg-dark">
        <section className="sign-in-content">
            <FontAwesomeIcon icon={faCircleUser} />
            <h1 className="signIn-title">Sign Up</h1>
            {formErrorMessagehtml}
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="input-wrapper">
                    <label htmlFor="userfirstname">First name</label>
                    <input type="text" id="userfirstname" {...register("userfirtsname", {required: "Please, enter a valid first name"})}/>
                    {userFirstNameError}
                </div>
                <div className="input-wrapper">
                    <label htmlFor="username">Name</label>
                    <input type="text" id="username" {...register("username", {required: "Please, enter a valid name"})}/>
                    {userNameError}
                </div>
                <div className="input-wrapper">
                    <label htmlFor="usermail">E-mail</label>
                    <input type="text" id="usermail" {...register("usermail", {required: "Please, enter a valid email"})}/>
                    {usermailError}
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
                <input type="submit" className="sign-in-button" value="Sign Up"/>
            </form>
        </section>
        </main>
        <Footer />
    </React.Fragment>
    )
}

export default SignUp