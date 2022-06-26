import { useSelector } from "react-redux/es/exports"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'


function UserLink() {

    const profileInfos = useSelector(state => state.ProfileInfosReducer.data)
    let profileName = ""

    if (profileInfos) {
        profileName = profileInfos.firstName
    }

    return (
        <a className="main-nav-item" href={`/user`}>
            <FontAwesomeIcon icon= {faCircleUser} />
            {profileName}
        </a>
    )
}


export default UserLink