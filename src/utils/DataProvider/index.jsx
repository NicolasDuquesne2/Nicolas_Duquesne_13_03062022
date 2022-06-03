import { useState, useEffect } from 'react'
import axios from 'axios'


export function useDataProvider(query) {


  const [response, setResponse] = useState({})
  const [error, setError] = useState(false)
  const [isLoading, setLoading] = useState(true)


  const executeOrder = async (config) => {

      try {
        const response = await axios(config)
        setResponse(response)
      } catch (err) {
        console.log(err)
        setError(true)
      } finally {
        setLoading(false)
      }
  }


  useEffect(() => {
    
    executeOrder(query)

  }, [query])

  if (!isLoading) {
    return { response, error }
  }
}