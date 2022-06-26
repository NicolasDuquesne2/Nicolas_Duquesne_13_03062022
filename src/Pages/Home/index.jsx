import React from "react"
import Header from "../../Components/Header"
import Hero from "../../Components/Hero"
import FeaturesWrapper from "../../Components/FeaturesWrapper"
import Footer from "../../Components/Footer"


function Home () {
    localStorage.removeItem('token')
    localStorage.removeItem('firstName')
    localStorage.removeItem('lastName')

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

export default Home