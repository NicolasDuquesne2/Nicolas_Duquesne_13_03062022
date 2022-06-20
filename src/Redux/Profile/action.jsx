import { useAxios } from '../../Hooks/Axios'
import {PUT_PROFILE, PUT_PROFILE_SUCCES, PUT_PROFILE_FAIL } from './type'

const putProfile = () => {
    return {
        type:PUT_PROFILE
    }
}

const putProfileSuccess = response => {
    return {
        type: PUT_PROFILE_SUCCES,
        payload: response
    }
}

const putProfileFail = response => {
    return {
        type: PUT_PROFILE_FAIL,
        payload: response
    }
}

export const apiCall = (data) => {

    return dispatch => {

        dispatch(putProfile())

        const defaultErrMessage = "The new name and new first name have not been sent. Please try later"
        const dataFetch = useAxios(data, defaultErrMessage)
        dataFetch
        .then(res => dispatch(putProfileSuccess(res)))
        .catch(err => dispatch(putProfileFail(err)))
    }
}

