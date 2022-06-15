import React from "react"
import Header from "../../Components/Header"
import Hero from "../../Components/Hero"
import FeaturesWrapper from "../../Components/FeaturesWrapper"
import Footer from "../../Components/Footer"
//import { connect } from 'react-redux'
//import { action } from 'module' pour mapDispatchToProps


function Home () {


    //const response = useDataProvider({method: 'post', url: 'http://localhost:3001/api/v1/user/login', data: {email: "steve@rogers.com", password: "password456"}})
    return (
        <React.Fragment>
            <Header 
                signOut={false}
            />
            <main>
                <Hero component="Home"/>
                <FeaturesWrapper />
            </main>
            <Footer />
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