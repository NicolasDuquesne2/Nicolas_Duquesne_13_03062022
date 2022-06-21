import { IDS } from "./type"


const Ids = (IdsObj) => {
    return {
        type: IDS,
        payload: IdsObj
    }
}


export const setIds = (IdsObj) => {

    return dispatch => {

        dispatch(Ids(IdsObj))

    }
}