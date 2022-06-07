import React from "react"
import { useDataProvider } from "../../utils/DataProvider"
import Header from "../../Components/Header"
//import { connect } from 'react-redux'
//import { action } from 'module' pour mapDispatchToProps


function Home (props) {


    const response = useDataProvider({method: 'post', url: 'http://localhost:3001/api/v1/user/login', data: {email: "steve@rogers.com", password: "password456"}})

    if (typeof(response) != "undefined") {

        if (!response.error) {
            return (
                <React.Fragment>
                    <Header />
                    <p className="text">reponse 200</p>
                </React.Fragment>
            )
        } else {
            return (
                <p>Error</p>
            )
        }
    }
}


/**const mapStateToProps = (state) => {
    return {
        alpha: state.alpha
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setAlpha: () => dispatch()
    }
}*/

//connect(mapStateToProps, mapDispatchToProps)(Home)


export default Home