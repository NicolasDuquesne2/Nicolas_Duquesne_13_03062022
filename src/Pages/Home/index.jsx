import { useDataProvider } from "../../utils/DataProvider"
import { useEffect, useState } from "react"
import axios from "axios"


function Home () {

    const http = 'http://localhost:3001/api/v1/user/login'
    const data = {email: "steve@rogers.com", password: "password456"}
    const config = {method: 'post', url: 'http://localhost:3001/api/v1/user/login', data: {email: "steve@rogers.com", password: "password456"}}



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

export default Home