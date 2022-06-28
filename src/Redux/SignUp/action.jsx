import { useDataProvider } from '../../Service/apiCall'
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
        let params = {action: 'signup', message: defaultErrMessage, payload: {method: 'post', data: data.data}}
        
        dispatch(postId())

        const dataFetch = useDataProvider(params, defaultErrMessage)
        dataFetch
        .then(res => {
            res.error? dispatch(postIdFail(res.error)): dispatch(postIdSuccess(res))
        })
        .catch(err => console.log(err))

    }
}