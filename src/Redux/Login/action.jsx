import { useDataProvider } from '../../Service/apiCall'
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


export const setLogin = (data) => {

    return dispatch => {

        const defaultErrMessage = "Login has failed. Please try later"
        let params = {action: 'login', message: defaultErrMessage, payload: {method: 'post', data: data.data}}
        dispatch(postId())
        const dataFetch = useDataProvider(params, defaultErrMessage)
        dataFetch
        .then(res => {
            res.error? dispatch(postIdFail(res.error)): dispatch(postIdSuccess(res.data.body.token))
        })
        .catch(err => console.log(err))

    }
}