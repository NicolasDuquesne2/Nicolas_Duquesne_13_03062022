
export default function useErrorsMessages(type) {
    switch (type) {
        case 400:
            return ("Your email or your password is missing")
        case 401:
            return ("Please Enter a valid username and password")
        case 500:
            return ("The server does not response")
        default:
    }
}