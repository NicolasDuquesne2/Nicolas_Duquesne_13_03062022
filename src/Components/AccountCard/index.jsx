import './account.css'

function AccountCard(account) {
    const config = account.account

    return (
        <section className="account">
            <div className="account-content-wrapper">
            <h3 className="account-title">{config.title}</h3>
            <p className="account-amount">{config.amount}</p>
            <p className="account-amount-description">{config.description}</p>
            </div>
            <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
            </div>
        </section>
    )
}


export default AccountCard