import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'

function SignIn () {
    return (
        <a className="main-nav-item" href="/sign-in">
            <FontAwesomeIcon icon= {faCircleUser} />
            Sign In
        </a>
    )
}

export default SignIn