import { IDS } from "./type"

const initialStateID = {
    data: null
}

const IdsReducer = (state= initialStateID, action) => {
    switch(action.type) {
        case IDS:
            return {
                ...state,
                data: action.payload
            }
        default:
            return state
    }
}

export default IdsReducer