import { useDataProvider } from '../../Service/apiCall'
import {POST_PROFILE_DATAS, POST_PROFILE_DATAS_SUCCES, POST_PROFILE_DATAS_FAIL } from './type'

const postProfileDatas = () => {
    return {
        type:POST_PROFILE_DATAS
    }
}

const postProfileDatasSuccess = response => {
    return {
        type: POST_PROFILE_DATAS_SUCCES,
        payload: response
    }
}

const postProfileDatasFail = response => {
    return {
        type:POST_PROFILE_DATAS_FAIL,
        payload: response
    }
}

export const setProfileDatas = (data) => {

    return dispatch => {

        dispatch(postProfileDatas())

        const defaultErrMessage = "User datas could not be fetched"
        let params = {action: 'get profile', message: defaultErrMessage, payload: {method: 'post', data: data.data, headers: {
            Authorization: `Bearer ${data.token}`
        }}}
        const dataFetch = useDataProvider(params, defaultErrMessage)
        dataFetch
        .then(res => {
            res.error? dispatch(postProfileDatasFail(res.error)): dispatch(postProfileDatasSuccess(res))
        })
        .catch(err => console.log(err))
    }
}

