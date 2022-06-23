import {POST_DATA, POST_DATA_SUCCES, POST_DATA_FAIL } from './type'

const initialStateID = {
    isLoading: false,
    data: null,
    error: ''
}

const SignUpReducer = (state= initialStateID, action) => {
    switch(action.type) {
        case POST_DATA:
            return {
                ...state,
                isLoading: true
            }
        case POST_DATA_SUCCES:
            return {
                ...state,
                isLoading: false,
                data: action.payload,
                error: ''
            }
        case POST_DATA_FAIL:
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

export default SignUpReducer