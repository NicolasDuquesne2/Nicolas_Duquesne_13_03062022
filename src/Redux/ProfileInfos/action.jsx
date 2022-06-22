import { PROFILE_INFOS } from "./type"


const profileInfos = (profileObj) => {
    return {
        type: PROFILE_INFOS,
        payload: profileObj
    }
}


export const setProfileInfos = (profileObj) => {

    return dispatch => {

        dispatch(profileInfos(profileObj))

    }
}