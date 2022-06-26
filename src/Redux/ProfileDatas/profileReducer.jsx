import {PUT_PROFILE_DATAS, PUT_PROFILE_DATAS_SUCCES, PUT_PROFILE_DATAS_FAIL } from './type'

const initialStateID = {
    isLoading: false,
    data: null,
    error: ''
}

const profileDatasReducer = (state= initialStateID, action) => {
    switch(action.type) {
        case PUT_PROFILE_DATAS:
            return {
                ...state,
                isLoading: true
            }
        case PUT_PROFILE_DATAS_SUCCES:
            return {
                ...state,
                isLoading: false,
                data: action.payload,
                error: ''
            }
        case PUT_PROFILE_DATAS_FAIL:
            return {
                ...state,
                isLoading: false,
                data: null,
                error: action.payload
            }
        default:
            return state
    }
}

export default profileDatasReducer