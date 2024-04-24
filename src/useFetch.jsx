import { useState, useEffect } from 'react'

export default function useFetch(type, search, parameters, offset) {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)

    let url = `/.netlify/functions/getData?type=${type}&search=${search}&resultOffset=${offset}`
    if (parameters) {
        parameters.forEach((param) => {
            url += `&${param.name}=${param.value}`
        })
    }

    useEffect(() => {
        async function fetchData() {
            setLoading(true)

            try {
                const res = await fetch(url)
                if (!res.ok) {
                    throw new Error(`An error occured: ${res.statusText}`)
                }

                const jsonData = await res.json()
                setData(jsonData)
            } catch (error) {
                console.error(error.message)
            } finally {
                setLoading(false)
            }
        }

        fetchData()
    }, [url])

    return {data, loading}
}