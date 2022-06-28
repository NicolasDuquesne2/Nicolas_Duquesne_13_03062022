import axios from "axios"
const baseUrl = 'http://localhost:3001/api/v1'

export function useDataProvider(params) {
    let payload = {}

    function fetchAxios(payload, message) {
        let returned = null
    
        async function fetchData() {
            try {
                return await axios(payload)
            } catch (err) {
                switch (err.code) {
                    case "ERR_NETWORK":
                        return {error: err.message}
                    case "ERR_BAD_REQUEST":
                        return {error: err.response.data.message}
                    default:
                        return {error: message}
                }
            } finally {
            }
        }
        
        returned = fetchData()
    
        return returned
    }

    switch(params.action) {
        case 'login':
            payload = params.payload
            payload.url = `${baseUrl}/user/login`
            return fetchAxios(payload, params.message)
        case 'signup':
            payload = payload = params.payload
            payload.url = `${baseUrl}/user/signup`
            return fetchAxios(payload, params.message)
        case 'set profile':
            payload = payload = params.payload
            payload.url = `${baseUrl}/user/profile`
            return fetchAxios(payload, params.message)
        case 'get profile':
            payload = payload = params.payload
            payload.url = `${baseUrl}/user/profile`
            return fetchAxios(payload, params.message)
        default:
    }



}