import { useAxios } from '../../Hooks/Axios'
import {POST_ID, POST_ID_SUCCES, POST_ID_FAIL } from './type'

const postId = () => {
    return {
        type:POST_ID
    }
}

const postIdSuccess = response => {
    return {
        type: POST_ID_SUCCES,
        payload: response
    }
}

const postIdFail = response => {
    return {
        type: POST_ID_FAIL,
        payload: response
    }
}


export const apiCall = (data) => {

    return dispatch => {

        dispatch(postId())

        const defaultErrMessage = "Login has failed. Please try later"

        const dataFetch = useAxios(data, defaultErrMessage)
        dataFetch
        .then(res => dispatch(postIdSuccess(res.data.body.token)))
        .catch(err => dispatch(postIdFail(err)))
    }
}

