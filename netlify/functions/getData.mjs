export default async (req) => {
    // const { type, search } = req.url.searchParams.URLSearchParams
    const url = new URL(req.url)
    const type = url.searchParams.get('type')
    const search = url.searchParams.get('search')

    const newUrl = `http://www.colourlovers.com/api/${type}/${search}/?format=json`
    try {
        const res = await fetch(newUrl)
        const data = await res.json()
        return new Response(JSON.stringify(data), { status: 200 })
    } catch(error) {
        return new Response(JSON.stringify(error.message), { status: 500 })
    }
}
