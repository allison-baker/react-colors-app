/* eslint-disable no-unused-vars */
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import InnerSearch from '../components/InnerSearch'
import useFetch from '../useFetch'

function Search() {
	const selection = useParams().type
	const [detailed, setDetailed] = useState(false)
	const [searchType, setSearchType] = useState('')
	const [parameters, setParameters] = useState()

	const { data, loading } = useFetch(selection, searchType, parameters)
	console.log(data)

	return (
		<>
			<div className='flex flex-col items-center min-h-[70vh]'>
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
					{detailed ? <InnerSearch selection={selection} setParameters={setParameters} setSearchType={setSearchType} /> : ''}
				</section>
				{loading ? <p>Loading...</p> : (
					<div className='flex flex-row flex-wrap gap-6 max-w-[500px] items-center justify-evenly py-8'>
						{data.map((item) => {
							return (
								<button key={item.id} onClick={() => console.log(item)}>
									<img src={item.imageUrl} alt={item.title} />
								</button>
							)
						})}
					</div>
				)}
			</div>
		</>
	)
}

export default Search
