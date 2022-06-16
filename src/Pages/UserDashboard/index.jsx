import React, {useRef, useEffect }from 'react'
import { useParams } from 'react-router-dom'
import { connect } from "react-redux/es/exports"
import { useForm } from "react-hook-form"
import Footer from '../../Components/Footer'
import Header from '../../Components/Header'
import Error from '../../Components/Error'
import AccountCard from '../../Components/AccountCard'
import { apiCall } from '../../Redux/Profile/action'
import './dashboard.css'

function UserDashboard(props) {

    const apiResLog = props.apiResLog
    const apiResProf = props.apiResProf
    const apiCall = props.apiCall

    const { id } = useParams()

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


    const { register, handleSubmit, setError ,formState: {errors} } = useForm()
    const editForm = useRef(null)
    const editButton = useRef(null)
    const nameInput = useRef(null)
    const fisrtNameInput = useRef(null)
    let nameErrhtml = ""
    let firstNameErrhtml = ""

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
        nameInput.current.value = ""
        fisrtNameInput.current.value = ""
    }
    
    const onSubmit = ({firstName, lastName}) => {
       const dataParams = {
        method: 'put', 
        url: 'http://localhost:3001/api/v1/user/profile', 
        data: {firstName, lastName}, 
        headers: {
            Authorization: `Bearer ${apiResLog.data}`
        }}

        console.log(dataParams)
        apiCall(dataParams)
    }


    errors.firstName? firstNameErrhtml = <p className="error-message">{errors.firstName.message}</p>: firstNameErrhtml = ''
    errors.lastName? nameErrhtml = <p className="error-message">{errors.lastName.message}</p> : nameErrhtml = ''

    useEffect(() => {
        if (apiResProf.isLoading) {
            console.log('loading')
        }else if (apiResProf.error) {
            return (
                console.log(apiResProf.error)
            )
        } else if (!apiResProf.isLoading && apiResProf.data != null) {
            console.log(apiResProf)  
        }
    }, [apiResProf])


    if (!apiResLog.isLoading && apiResLog.data === null) {
        return (
            <React.Fragment>
                <Header signOut={false} />
                <Error type="401" />
                <Footer />
            </React.Fragment>
        )
    }

    return (
        <React.Fragment>
            <Header signOut={true} userId={id}/>
            <main className="main bg-dark">
                <div className="header">
                    <h1 className="header-title">Welcome back<br />Tony Jarvis!</h1>
                    <button className="edit-button" onClick={clickEditName} ref={editButton}>Edit Name</button>
                    <form className="visible edit-name" ref={editForm} onSubmit={handleSubmit(onSubmit)}>
                        <div className="left-wrapper">
                            <input className ="name-input" type="text" id="firstname" placeholder='First Name' ref={fisrtNameInput} {...register("firstName", {required: "Please, enter a valid first name"})}/>
                            {firstNameErrhtml}
                            <input type="submit" className="name-button" value="Save"/>
                        </div>
                        <div className="right-wrapper">
                            <input className ="name-input" type="text" id="name" placeholder='Name' ref={nameInput} {...register("lastName", {required: "Please, enter a valid name"})}/>
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
                    />
                ))}
            </main>

            <Footer />
        </React.Fragment>
    )
}

const mapStateToProps = state => {
    return {
        apiResLog: state.logInReducer,
        apiResProf: state.profileReducer
    }
}


const mapDispatchToProps = dispatch => {
    return {
        apiCall: (data) => dispatch(apiCall(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserDashboard)