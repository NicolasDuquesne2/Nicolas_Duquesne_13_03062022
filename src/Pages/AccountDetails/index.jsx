import React from 'react'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import './account.css'

function AccountDetail() {

    const data = {
        title:"Argent Bank Checking (x8349)",
        amount: "$2,082.79",
        description: "Available Balance"
    }


    return (
        <React.Fragment>
            <Header signOut={false}/>
            <main className="main bg-dark">
                <div className='header-detail'>
                    <h3 className="account-title">{data.title}</h3>
                    <p className="account-amount">{data.amount}</p>
                    <p className="account-amount-description">{data.description}</p>
                </div>
            </main>
            <Footer />
        </React.Fragment>
    )
}


export default AccountDetail