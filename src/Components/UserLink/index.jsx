import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'


function UserLink(userId) {
    return (
        <a className="main-nav-item" href={`user/${userId}`}>
            <FontAwesomeIcon icon= {faCircleUser} />
            Tony
        </a>
    )
}


export default UserLink