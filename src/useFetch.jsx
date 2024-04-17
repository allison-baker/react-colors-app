import { useState, useEffect } from 'react'

export default function useFetch(url) {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        async function fetchData() {
            setLoading(true)
            setError(null)

            try {
                const res = await fetch(url, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*',
                    }
                })
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