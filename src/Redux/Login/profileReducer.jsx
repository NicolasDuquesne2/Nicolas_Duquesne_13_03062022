import {POST_ID, POST_ID_SUCCES, POST_ID_FAIL } from './type'

const initialStateID = {
    isLoading: false,
    data: null,
    error: ''
}

const profileReducer = (state= initialStateID, action) => {
    switch(action.type) {
        case POST_ID:
            return {
                ...state,
                isLoading: true
            }
        case POST_ID_SUCCES:
            return {
                ...state,
                isLoading: false,
                data: action.payload,
                error: ''
            }
        case POST_ID_FAIL:
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