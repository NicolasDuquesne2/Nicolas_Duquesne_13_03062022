import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser, faSignOut } from '@fortawesome/free-solid-svg-icons'
import logo from '../../img/argentBankLogo.png'
import SignOut from '../SignOut'
import SignIn from '../SignIn'
import UserLink from '../UserLink'
import './header.css'


    

function Header(signOut, userId) {

    let signElement = ''
    let userLinkElement = ''

    if (signOut.signOut) {
        signElement = <SignOut />
        userLinkElement = <UserLink userId={userId}/>
    }

    if (!signOut.signOut) {
        signElement = <SignIn />
    }


    return (
        <nav className="main-nav">
            <a className="main-nav-logo" href="/">
                <img
                    className="main-nav-logo-image"
                    src={logo}
                    alt="Argent Bank Logo"
                />
                <h1 className="sr-only">Argent Bank</h1>
            </a>
            <div>
                {userLinkElement}
                {signElement}
            </div>
        </nav>
    )
}

export default Header