import React from "react";
import Error from "../../Components/Error";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";


function ErrorPage({type}) {

    return (
        <React.Fragment>
            <Header signOut={false}/>
            <Error type={type} />
            <Footer />
        </React.Fragment>
    )
}

export default ErrorPage