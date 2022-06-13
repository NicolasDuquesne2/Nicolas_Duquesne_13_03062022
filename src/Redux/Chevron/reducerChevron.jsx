import { CHANGE_CHEVRON } from "./type"

const initialState = {
    chevronUp: false
}

const chevronReducer = (state = initialState, action) => {

    /**switch (action.type) {
        case CHANGE_CHEVRON: {

            return {
                ...state,
                chevronUp:action.value
            }
        }

        default: return state
    }*/


    switch (action.type) {
        case CHANGE_CHEVRON: {
                if(state.chevronUp) {
                    return {
                        ...state,
                        chevronUp: false
                    }
                }

                if (!state.chevronUp) {
                    return {
                        ...state,
                        chevronUp: true
                    }
                }
                break
     
            }
        default: return state
    }
}


export default chevronReducer