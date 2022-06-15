import React, {useRef }from 'react'
import { useParams } from 'react-router-dom'
import Footer from '../../Components/Footer'
import Header from '../../Components/Header'
import AccountCard from '../../Components/AccountCard'
import './dashboard.css'

function UserDashboard() {

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


    const editForm = useRef(null)
    const editButton = useRef(null)
    const nameInput = useRef(null)
    const fisrtNameInput = useRef(null)

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

    return (
        <React.Fragment>
            <Header signOut={true} userId={id}/>
            <main className="main bg-dark">
                <div className="header">
                    <h1 className="header-title">Welcome back<br />Tony Jarvis!</h1>
                    <button className="edit-button" onClick={clickEditName} ref={editButton}>Edit Name</button>
                    <form className="unvisible edit-name" ref={editForm}>
                        <div className="left-wrapper">
                            <input className ="name-input" type="text" id="firstname" placeholder='First Name' ref={fisrtNameInput}/>
                            <input type="submit" className="name-button" value="Save"/>
                        </div>
                        <div className="right-wrapper">
                            <input className ="name-input" type="text" id="name" placeholder='Name' ref={nameInput}/>
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

export default UserDashboard