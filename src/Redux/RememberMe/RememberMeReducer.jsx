import { REMEMBER_ME } from "./type"

const initialStateID = {
    data: false
}

const RememberMeReducer = (state= initialStateID, action) => {
    switch(action.type) {
        case REMEMBER_ME:
            return {
                ...state,
                data: action.payload
            }
        default:
            return state
    }
}

export default RememberMeReducer