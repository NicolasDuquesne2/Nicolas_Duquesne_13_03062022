
export default function useErrorsMessages(message) {
    console.log(message)
    switch (message) {
        case "Error: User not found!":
            return ("User not found. Please enter a right Id or create an account")
        case "Error: Password is invalid":
            return ("Please check your Id or your password")
        case "Network Error":
            return ("The server does not respond")
        default:
    }
}