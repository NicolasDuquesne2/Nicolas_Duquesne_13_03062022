import { REMEMBER_ME } from "./type"


const rememberMe = (choice) => {
    return {
        type: REMEMBER_ME,
        payload: choice
    }
}


export const setRememberMe = (choice) => {

    return dispatch => {

        dispatch(rememberMe(choice))

    }
}