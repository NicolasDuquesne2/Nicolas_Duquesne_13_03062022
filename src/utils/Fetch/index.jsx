import { useState, useEffect } from 'react'

/**
 * 
 * @module useFetch
 */


/**
 * useFetch is the fetch service for acessing the api data
 * @returns {{isLoading: boolean, data: Object, error: boolean }}
 */
export function useFetch(url) {
  const [data, setData] = useState({})
  const [error, setError] = useState(false)
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    if (!url) return

    async function fetchData() {
      try {
        const response = await fetch(url)

        const data = await response.json()

        setData(data)
      } catch (err) {
        console.log(err)
        setError(true)
      } finally {
        setLoading(false)
      }
    }

    setLoading(true)

    fetchData()
  }, [url])

  return { isLoading, data, error }
}