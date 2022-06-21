import { ERR_MESSAGE_HTML } from "./type"


const errMessHtml = (htmlElement) => {
    return {
        type: ERR_MESSAGE_HTML,
        payload: htmlElement
    }
}


export const setErrMessHtml = (htmlElement) => {

    return dispatch => {

        dispatch(errMessHtml(htmlElement))

    }
}