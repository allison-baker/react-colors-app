import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import InnerSearch from '../components/InnerSearch'

function Search() {
	const selection = useParams().type
	const [detailed, setDetailed] = useState(false)
	const [searchType, setSearchType] = useState('')

	let fullUrl = `https://www.colourlovers.com/api/${selection}/`
	if (searchType) fullUrl += `${searchType}/`

	const [parameters, setParameters] = useState([])
	parameters.forEach((param) => {
		fullUrl += `&${param.name}=${param.value}`
	})

	fullUrl += parameters.length > 0 ? `&format=json` : `?format=json`

	const [data, setData] = useState([])
	useEffect(() => {
		fetch(fullUrl, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json;charset=utf-8',
				'Access-Control-Allow-Origin': 'http://127.0.0.1:5173',
			},
		})
			.then((res) => res.json())
			.then((data) => {
				setData(data)
				setSearchType('')
				setParameters([])
			})
			.catch((error) => console.error(error.message))
	}, [fullUrl])

	return (
		<>
			<div className='flex flex-col items-center'>
				<h1 className='text-2xl text-center py-6 capitalize'>Search {selection}</h1>
				<section className='flex flex-col items-center gap-4 py-6'>
					<div className='flex flex-row items-center gap-4'>
						<h2>Quick Search:</h2>
						<button className='btn btn-xs' onClick={() => setDetailed(!detailed)}>
							<img src={detailed ? '/caret-down-solid.svg' : '/caret-up-solid.svg'} width='10' height='10' />
						</button>
					</div>
					{detailed ? (
						''
					) : (
						<div className='flex flex-row gap-4 items-center'>
							<button className='btn btn-md rounded-full btn-outline' onClick={() => setSearchType('random')}>
								Random
							</button>
							<button className='btn btn-md rounded-full btn-outline' onClick={() => setSearchType('new')}>
								New
							</button>
							<button className='btn btn-md rounded-full btn-outline' onClick={() => setSearchType('top')}>
								Popular
							</button>
						</div>
					)}
				</section>
				<section className='py-6 flex flex-col items-center gap-8'>
					<div className='flex flex-row items-center gap-4'>
						<h2>OR Detailed Search:</h2>
						<button className='btn btn-xs' onClick={() => setDetailed(!detailed)}>
							<img src={detailed ? '/caret-up-solid.svg' : '/caret-down-solid.svg'} width='10' height='10' />
						</button>
					</div>
					{detailed ? <InnerSearch selection={selection} setParameters={setParameters} /> : ''}
				</section>
				{data.map((item) => {
					return <img src={item.imageUrl} alt={item.title} key={item.id} />
				})}
			</div>
		</>
	)
}

export default Search
