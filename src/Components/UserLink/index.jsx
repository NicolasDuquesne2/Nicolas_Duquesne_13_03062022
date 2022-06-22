import { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux/es/exports"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'


function UserLink({userId}) {

    const ids = useSelector(state => state.profileReducer.data)
    let profileName = "Tony"

    if (ids) {
        console.log('render')
        profileName = ids.data.body.firstName
    }

    return (
        <a className="main-nav-item" href={`${userId}`}>
            <FontAwesomeIcon icon= {faCircleUser} />
            {profileName}
        </a>
    )
}


export default UserLink