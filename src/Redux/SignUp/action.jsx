import { useAxios } from '../../Hooks/Axios'
import {POST_DATA, POST_DATA_SUCCES, POST_DATA_FAIL } from './type'

const postId = () => {
    return {
        type:POST_DATA
    }
}

const postIdSuccess = response => {
    return {
        type: POST_DATA_SUCCES,
        payload: response
    }
}

const postIdFail = response => {
    return {
        type: POST_DATA_FAIL,
        payload: response
    }
}


export const setCreation = (data) => {

    return dispatch => {

        const defaultErrMessage = "Login has failed. Please try later"
        dispatch(postId())

        const dataFetch = useAxios(data, defaultErrMessage)
        dataFetch
        .then(res => {
            res.error? dispatch(postIdFail(res.error)): dispatch(postIdSuccess(res))
        })
        .catch(err => console.log(err))

    }
}