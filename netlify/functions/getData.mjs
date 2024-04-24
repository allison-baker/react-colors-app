export default async (req) => {
    // const { type, search } = req.url.searchParams.URLSearchParams
    const url = new URL(req.url)
    const type = url.searchParams.get('type')
    const search = url.searchParams.get('search')
    const resultOffset = url.searchParams.get('resultOffset')

    const hueRange = url.searchParams.get('hueRange')
    const briRange = url.searchParams.get('briRange')
    const keywords = url.searchParams.get('keywords')

    const fullURL = `http://www.colourlovers.com/api/${type}/${search}?format=json&resultOffset=${resultOffset * 20}${hueRange ? `&hueRange=${hueRange}` : ''}${briRange ? `&briRange=${briRange}` : ''}${keywords ? `&keywords=${keywords}` : ''}`
    console.log(fullURL)
    try {
        const res = await fetch(fullURL)
        const data = await res.json()
        return new Response(JSON.stringify(data), { status: 200 })
    } catch (error) {
        return new Response(JSON.stringify(error.message), { status: 500 })
    }
}
