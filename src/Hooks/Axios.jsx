import axios from 'axios'


export function useAxios(params, message) {
    let returned = null

    async function fetchData() {
        try {
            return await axios(params)
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