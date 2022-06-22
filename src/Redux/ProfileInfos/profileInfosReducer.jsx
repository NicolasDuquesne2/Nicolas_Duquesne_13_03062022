import { PROFILE_INFOS } from "./type"

const initialStateID = {
    data: null
}

const ProfileInfosReducer = (state= initialStateID, action) => {
    switch(action.type) {
        case PROFILE_INFOS:
            return {
                ...state,
                data: action.payload
            }
        default:
            return state
    }
}

export default ProfileInfosReducer