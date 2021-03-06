import { useDataProvider } from '../../Service/apiCall'
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

export const setProfile = (data) => {

    return dispatch => {

        dispatch(putProfile())

        const defaultErrMessage = "The new name and new first name have not been sent. Please try later"
        let params = {action: 'set profile', message: defaultErrMessage, payload: {method: 'put', data: data.data, headers: {
            Authorization: `Bearer ${data.token}`
        }}}
        const dataFetch = useDataProvider(params, defaultErrMessage)
        dataFetch
        .then(res => {
            res.error? dispatch(putProfileFail(res.error)): dispatch(putProfileSuccess(res))
        })
        .catch(err => console.log(err))
    }
}

