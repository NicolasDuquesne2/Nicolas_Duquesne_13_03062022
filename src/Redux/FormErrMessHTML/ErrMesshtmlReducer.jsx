import { ERR_MESSAGE_HTML } from "./type"

const initialStateID = {
    data: null
}

const ErrMessHtmlReducer = (state= initialStateID, action) => {
    switch(action.type) {
        case ERR_MESSAGE_HTML:
            return {
                ...state,
                data: action.payload
            }
        default:
            return state
    }
}

export default ErrMessHtmlReducer