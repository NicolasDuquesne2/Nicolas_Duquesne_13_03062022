import React, {useRef, useEffect }from 'react'
import { useParams } from 'react-router-dom'
import { connect } from "react-redux/es/exports"
import { useForm } from "react-hook-form"
import Footer from '../../Components/Footer'
import Header from '../../Components/Header'
import AccountCard from '../../Components/AccountCard'
import { apiCall } from '../../Redux/Login/action'
import './dashboard.css'

function UserDashboard({apiRes, apiCall}) {

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
    let firstnameErrhtml = ""

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
            Authorization: `Bearer ${apiRes.data}`
        }}

        console.log(dataParams)
       //apiCall(dataParams)
    }

    errors.username? firstnameErrhtml = <p className="error-message">{errors.firstname.message}</p>: firstnameErrhtml = ''
    errors.password? nameErrhtml = <p className="error-message">{errors.name.message}</p> : nameErrhtml = ''

    useEffect(() => {
        if (apiRes.isLoading) {
            console.log('loading')
        }else if (apiRes.error) {
            return (
                console.log(apiRes.error)
            )
        } else if (!apiRes.isLoading) {
            console.log(apiRes)  
        }
    }, [apiRes])



    return (
        <React.Fragment>
            <Header signOut={true} userId={id}/>
            <main className="main bg-dark">
                <div className="header">
                    <h1 className="header-title">Welcome back<br />Tony Jarvis!</h1>
                    <button className="edit-button" onClick={clickEditName} ref={editButton}>Edit Name</button>
                    <form className="visible edit-name" ref={editForm} onSubmit={handleSubmit(onSubmit)}>
                        <div className="left-wrapper">
                            <input className ="name-input" type="text" id="firstname" placeholder='First Name' ref={fisrtNameInput} {...register("firstname", {required: "Please, enter a valid first name"})}/>
                            <input type="submit" className="name-button" value="Save"/>
                            {firstnameErrhtml}
                        </div>
                        <div className="right-wrapper">
                            <input className ="name-input" type="text" id="name" placeholder='Name' ref={nameInput} {...register("name", {required: "Please, enter a valid name"})}/>
                            <button className="name-button" onClick={clickEditCancel}>Cancel</button>
                            {nameErrhtml}
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
        apiRes: state.logInReducer
    }
}


const mapDispatchToProps = dispatch => {
    return {
        apiCall: (data) => dispatch(apiCall(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserDashboard)