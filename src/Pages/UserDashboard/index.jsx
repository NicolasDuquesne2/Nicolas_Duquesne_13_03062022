import React, {useRef, useEffect }from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux/es/exports"
import { useForm } from "react-hook-form"
import Footer from '../../Components/Footer'
import Header from '../../Components/Header'
import useErrorsMessages from '../../Hooks/ErrorsMessages'
import AccountCard from '../../Components/AccountCard'
import { setProfile } from '../../Redux/Profile/action'
import { setProfileInfos } from '../../Redux/ProfileInfos/action'
import { setErrMessHtml } from '../../Redux/FormErrMessHTML/action'
import './dashboard.css'

function UserDashboard() {

    const apiResLog = useSelector(state => state.logInReducer)
    const apiResProf = useSelector(state => state.profileReducer)
    const formMessagehtml = useSelector(state => state.ErrMessHtmlReducer.data)
    const profileInfos = useSelector(state => state.ProfileInfosReducer.data)
    const dispatch = useDispatch()
    const { id } = useParams()
    const formErrorMessage = useErrorsMessages(apiResProf.error)
    let nametext = "Tony Jarvis!"

    const accounts = [
        {
            title:"Argent Bank Checking (x8349)",
            amount: "$2,082.79",
            description: "Available Balance"
        },
        {
            title: "Argent Bank Savings (x6712)",
            amount: "$2,082.79",
            description: "Available Balance"
        },
        {
            title: "Argent Bank Credit Card (x8349)",
            amount: "$2,082.79",
            description: "Available Balance"
        }
    ]


    const { register, handleSubmit , setValue,formState: {errors} } = useForm()
    const editForm = useRef(null)
    const editButton = useRef(null)
    let nameErrhtml = ""
    let firstNameErrhtml = ""
    let navigate = useNavigate()

    function clickEditName(e) {
        editForm.current.classList.add("visible")
        editForm.current.classList.remove("unvisible")
        editButton.current.classList.add("unvisible")
        editButton.current.classList.remove("edit-button")
    }

    function clickEditCancel(e) {
        e.preventDefault()
        editForm.current.classList.add("unvisible")
        editForm.current.classList.remove("visible")
        editButton.current.classList.add("edit-button")
        editButton.current.classList.remove("unvisible")
        setValue("firstName", "")
        setValue("lastName", "")
    }
    
    const onSubmit = ({firstName, lastName}) => {
        const token = apiResLog.data? apiResLog.data: localStorage.getItem("token")
       const dataParams = {
        method: 'put', 
        url: 'http://localhost:3001/api/v1/user/profile', 
        data: {firstName, lastName}, 
        headers: {
            Authorization: `Bearer ${token}`
        }}
        dispatch(setProfile(dataParams))
    }

    if (profileInfos) {
        nametext = `${profileInfos.firstName} ${profileInfos.lastName}!`
    }


    errors.firstName? firstNameErrhtml = <p className="error-message">{errors.firstName.message}</p>: firstNameErrhtml = ''
    errors.lastName? nameErrhtml = <p className="error-message">{errors.lastName.message}</p> : nameErrhtml = ''

    useEffect(() => {

        const token = localStorage.getItem('token')

        if (!apiResLog.isLoading && !token) {
            navigate("/sign-in")
        }


        if (apiResProf.error) {
            dispatch(setErrMessHtml(<p className="error-message-form">{formErrorMessage}</p>))
        } else if (!apiResProf.isLoading && apiResProf.data != null) {
            dispatch(setErrMessHtml(<p className="succes-message-form">First name and name have been successfully modified</p>))
            setTimeout(() => {
                dispatch(setErrMessHtml(null))
            }, 2000)
            dispatch(setProfileInfos({firstName: apiResProf.data.data.body.firstName, lastName: apiResProf.data.data.body.lastName}))
        }
    }, [apiResProf])


    return (
        <React.Fragment>
            <Header signOut={true} userId={id}/>
            <main className="main bg-dark">
                <div className="header">
                    <h1 className="header-title">Welcome back<br />{nametext}</h1>
                    <button className="edit-button" onClick={clickEditName} ref={editButton}>Edit Name</button>
                    {formMessagehtml}
                    <form className="unvisible edit-name" ref={editForm} onSubmit={handleSubmit(onSubmit)}>
                        <div className="left-wrapper">
                            <input className ="name-input" type="text" id="firstname" placeholder='First Name' {...register("firstName", {required: "Please, enter a valid first name"})}/>
                            {firstNameErrhtml}
                            <input type="submit" className="name-button" value="Save"/>
                        </div>
                        <div className="right-wrapper">
                            <input className ="name-input" type="text" id="name" placeholder='Name' {...register("lastName", {required: "Please, enter a valid name"})}/>
                            {nameErrhtml}
                            <button className="name-button" onClick={clickEditCancel}>Cancel</button>
                        </div>
                    </form>
                </div>
                <h2 className="sr-only">Accounts</h2>
                {accounts.map((account, index) => (
                    <AccountCard 
                        key={`account-${index}`}
                        account={account}
                        id={id}
                    />
                ))}
            </main>

            <Footer />
        </React.Fragment>
    )
}


export default UserDashboard