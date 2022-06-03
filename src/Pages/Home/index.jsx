import { useFetch } from "../../utils/Fetch"


function Home () {

    const user = useFetch('http://localhost:3001')

    if (user.error) {
        console.log('Data error loading')

        if (!user.isLoading) {
            console.log(user.data)
        }
    }

    return (
        <p className="text">Page d'accueil</p>
    )
}

export default Home