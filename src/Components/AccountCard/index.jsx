import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import './account.css'

function AccountCard({account, id}) {
    const config = account
    const transactButton = useRef(null)
    let navigate = useNavigate()

    
    function clickTransactionButton(e) {
        e.preventDefault()
        navigate(`/user/${id}/details`)
    }

    return (
        <section className="account">
            <div className="account-content-wrapper">
            <h3 className="account-title">{config.title}</h3>
            <p className="account-amount">{config.amount}</p>
            <p className="account-amount-description">{config.description}</p>
            </div>
            <div className="account-content-wrapper cta">
            <button className="transaction-button" ref={transactButton} onClick={clickTransactionButton}>View transactions</button>
            </div>
        </section>
    )
}


export default AccountCard