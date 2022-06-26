import { useAxios } from '../../Hooks/Axios'
import {PUT_PROFILE_DATAS, PUT_PROFILE_DATAS_SUCCES, PUT_PROFILE_DATAS_FAIL } from './type'

const putProfileDatas = () => {
    return {
        type:PUT_PROFILE_DATAS
    }
}

const putProfileDatasSuccess = response => {
    return {
        type: PUT_PROFILE_DATAS_SUCCES,
        payload: response
    }
}

const putProfileDatasFail = response => {
    return {
        type:PUT_PROFILE_DATAS_FAIL,
        payload: response
    }
}

export const setProfileDatas = (data) => {

    return dispatch => {

        dispatch(putProfileDatas())

        const defaultErrMessage = "User datas could not be fetched"
        const dataFetch = useAxios(data, defaultErrMessage)
        dataFetch
        .then(res => {
            res.error? dispatch(putProfileDatasFail(res.error)): dispatch(putProfileDatasSuccess(res))
        })
        .catch(err => console.log(err))
    }
}

