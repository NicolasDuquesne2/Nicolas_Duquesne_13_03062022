import axios from 'axios'
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

        axios(data)
        .then(res => {
            dispatch(putProfileSuccess(res))
        })
        .catch(err => {
            switch (err.code) {
                case "ERR_NETWORK":
                    dispatch(putProfileFail(err.message))
                    break
                case "ERR_BAD_REQUEST":
                    dispatch(putProfileFail(err.response.data.message))
                    break
                default:
                    dispatch(putProfileFail("The new name and new first name have not been sent. Please try later"))
            }
        })
    }
}

