import { useState, useEffect } from 'react'

export default function useFetch(type, search) {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const url = `/.netlify/functions/getData?type=${type}&search=${search}`

    useEffect(() => {
        async function fetchData() {
            setLoading(true)
            setError(null)

            try {
                const res = await fetch(url)
                if (!res.ok) {
                    throw new Error(`An error occured: ${res.statusText}`)
                }

                const jsonData = await res.json()
                setData(jsonData)
            } catch (error) {
                setError(error.message)
            } finally {
                setLoading(false)
            }
        }

        fetchData()
    }, [url])

    return {data, loading, error}
}