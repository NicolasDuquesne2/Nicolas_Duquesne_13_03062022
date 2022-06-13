import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOut } from '@fortawesome/free-solid-svg-icons'


function SignOut() {
    return (
        <a className="main-nav-item" href="/">
            <FontAwesomeIcon icon = {faSignOut} />
            Sign Out
        </a>
    )
}


export default SignOut