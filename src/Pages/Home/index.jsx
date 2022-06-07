import React from "react"
import { useDataProvider } from "../../utils/DataProvider"
import Header from "../../Components/Header"
import Hero from "../../Components/Hero"
import FeaturesWrapper from "../../Components/FeaturesWrapper"
//import { connect } from 'react-redux'
//import { action } from 'module' pour mapDispatchToProps


function Home () {


    //const response = useDataProvider({method: 'post', url: 'http://localhost:3001/api/v1/user/login', data: {email: "steve@rogers.com", password: "password456"}})
    return (
        <React.Fragment>
            <Header />
            <main>
                <Hero component="Home"/>
                <FeaturesWrapper />
            </main>
        </React.Fragment>
    )
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