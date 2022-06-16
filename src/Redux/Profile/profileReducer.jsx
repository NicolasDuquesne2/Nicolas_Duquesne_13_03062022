import {PUT_PROFILE, PUT_PROFILE_SUCCES, PUT_PROFILE_FAIL } from './type'

const initialStateID = {
    isLoading: false,
    data: null,
    error: ''
}

const profileReducer = (state= initialStateID, action) => {
    switch(action.type) {
        case PUT_PROFILE:
            return {
                ...state,
                isLoading: true
            }
        case PUT_PROFILE_SUCCES:
            return {
                ...state,
                isLoading: false,
                data: action.payload,
                error: ''
            }
        case PUT_PROFILE_FAIL:
            return {
                ...state,
                isLoading: false,
                data: [],
                error: action.payload
            }
        default:
            return state
    }
}

export default profileReducer