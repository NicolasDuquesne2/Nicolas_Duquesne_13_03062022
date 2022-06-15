import axios from 'axios'
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

        axios({method: 'post', url: 'http://localhost:3001/api/v1/user/login', data: data})
        .then(res => {
            dispatch(postIdSuccess(res))
        })
        .catch(err => {
            dispatch(postIdFail(err.message))
        })
    }
}

