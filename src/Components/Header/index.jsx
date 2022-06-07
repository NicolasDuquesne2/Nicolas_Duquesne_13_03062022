

function Header() {
    <nav className="main-nav">
        <a class="main-nav-logo" href="./index.html">
            <img
                className="main-nav-logo-image"
                src="./img/argentBankLogo.png"
                alt="Argent Bank Logo"
            />
            <h1 className="sr-only">Argent Bank</h1>
        </a>
        <div>
            <a className="main-nav-item" href="./sign-in.html">
                <i class="fa fa-user-circle"></i>
                Sign In
            </a>
        </div>
    </nav>
}

export default Header