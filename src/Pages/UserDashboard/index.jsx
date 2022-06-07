import React, { useState, useRef }from 'react'
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

    const [editName, setEditName] = useState(true)
    const visible = useRef(null)

    function clickEditName(e) {
        switch (editName) {
            case false:
                setEditName(true)
                visible.current.classList.add("unvisible")
                visible.current.classList.remove("visible")
                break
            case true:
                setEditName(false)
                visible.current.classList.add("visible")
                visible.current.classList.remove("unvisible")
                break
            default:
        }
    }

    return (
        <React.Fragment>
            <Header signOut={true}/>
            <main className="main bg-dark">
                <div className="header">
                    <h1>Welcome back<br />Tony Jarvis!</h1>
                    <button className="edit-button" onClick={clickEditName}>Edit Name</button>
                    <p className='unvisible' ref={visible}>lol</p>
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