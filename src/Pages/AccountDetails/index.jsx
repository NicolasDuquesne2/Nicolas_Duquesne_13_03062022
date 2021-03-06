import React, { useEffect } from 'react'
import { connect } from "react-redux/es/exports"
import { useNavigate, useParams } from 'react-router-dom'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import AccountOperation from '../../Components/AccountOperation'
import './account.css'

function AccountDetail({apiResLog}) {

    const { id } = useParams()
    let navigate = useNavigate()

    const dataTitle = {
        title:"Argent Bank Checking (x8349)",
        amount: "$2,082.79",
        description: "Available Balance"
    }

    const dataOperations = [

        {
            date: "june 20th, 2020",
            description: "Golden Sun Bakery",
            amount: "$10.00",
            balance: "$2082.79",
            type: "Electronique",
            category: "Food"
        },

        {
            date: "june 20th, 2020",
            description: "Golden Sun Bakery",
            amount: "$7.00",
            balance: "$2082.79",
            type: "Electronique",
            category: "Food"
        },

        {
            date: "june 20th, 2020",
            description: "Golden Sun Bakery",
            amount: "$5.00",
            balance: "$2082.79",
            type: "Electronique",
            category: "Food"
        },

        {
            date: "june 20th, 2020",
            description: "Golden Sun Bakery",
            amount: "$4.00",
            balance: "$2082.79",
            type: "Electronique",
            category: "Food"
        }
    ]


    useEffect(() => {
        const token = localStorage.getItem('token')

        if (!apiResLog.isLoading && !token) {
            navigate("/sign-in")
        }

    },[])

    return (
        <React.Fragment>
            <Header signOut={true} userId={id}/>
            <main className="main bg-dark">
                <div className='header-detail'>
                    <h3 className="account-title">{dataTitle.title}</h3>
                    <p className="account-amount">{dataTitle.amount}</p>
                    <p className="account-amount-description">{dataTitle.description}</p>
                </div>
                <div className='center'>
                    <div className='tab-wrapper'>
                        <div className="titles">
                            <p className='button-wrapper'></p>
                            <p>Date</p>
                            <p>Description</p>
                            <p>Amount</p>
                            <p>Balance</p>
                        </div>
                        <div className='operations-wrapper'>
                            {dataOperations.map((operation, index) => (
                                <AccountOperation 
                                    key={`operation-${index}`}
                                    operation={operation}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </React.Fragment>
    )
}


const mapStateToProps = state => {
    return {
        apiResLog: state.logInReducer
    }
}

export default connect(mapStateToProps)(AccountDetail)