import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import logo from '../../img/argentBankLogo.png'
import './header.css'

function Header() {
    return (
        <nav className="main-nav">
            <a class="main-nav-logo" href="./index.html">
                <img
                    className="main-nav-logo-image"
                    src={logo}
                    alt="Argent Bank Logo"
                />
                <h1 className="sr-only">Argent Bank</h1>
            </a>
            <div>
                <a className="main-nav-item" href="./sign-in.html">
                    <FontAwesomeIcon icon="fa-solid fa-circle-user" />
                    Sign In
                </a>
            </div>
        </nav>
    )
}

export default Header