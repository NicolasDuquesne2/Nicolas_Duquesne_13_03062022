import { useDataProvider } from "../../utils/DataProvider"
import { connect } from 'react-redux'
//import { action } from 'module' pour mapDispatchToProps


function Home (props) {


    const response = useDataProvider({method: 'post', url: 'http://localhost:3001/api/v1/user/login', data: {email: "steve@rogers.com", password: "password456"}})

    if (typeof(response) != "undefined") {

        if (!response.error) {
            return (
                <p className="text">reponse 200</p>
            )
        } else {
            return (
                <p>Error</p>
            )
        }
    }
}


const mapStateToProps = (state) => {
    return {
        alpha: state.alpha
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setAlpha: () => dispatch()
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Home)