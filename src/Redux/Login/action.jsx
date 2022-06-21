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

        const defaultErrMessage = "Login has failed. Please try later"
        dispatch(postId())

        const dataFetch = useAxios(data, defaultErrMessage)
        dataFetch
        .then(res => {
            res.error? dispatch(postIdFail(res.error)): dispatch(postIdSuccess(res.data.body.token))
        })
        .catch(err => console.log(err))

    }
}