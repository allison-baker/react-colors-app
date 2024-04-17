import { useState } from 'react'
import PropTypes from 'prop-types'
import { useParams } from 'react-router-dom'
import InnerSearch from '../components/InnerSearch'
import useFetch from '../useFetch'

function HandleSearch({ urlPart1, urlPart2 }) {
	const url = 'http://www.colourlovers.com/api/'
	const { data, error, loading } = useFetch(`${url}${urlPart1}/${urlPart2}`)
	console.log(data, error, loading)

	return (
		<>
			<p>We&apos;re working on it.</p>
		</>
	)
}

HandleSearch.propTypes = {
	urlPart1: PropTypes.string.isRequired,
	urlPart2: PropTypes.string.isRequired,
}

function Search() {
	const selection = useParams().type

	const [urlPart1, setUrlPart1] = useState('')
	const [urlPart2, setUrlPart2] = useState('')

	return (
		<>
			<div className='flex flex-col items-center'>
				<h1 className='text-2xl text-center m-8 capitalize'>Search {selection}</h1>
				<section className='flex flex-row gap-4 items-center mb-8'>
					<button className='btn btn-md rounded-full btn-outline' onClick={() => setUrlPart1('color')}>
						Single
					</button>
					<button className='btn btn-md rounded-full btn-outline' onClick={() => setUrlPart1('colors')}>
						Multiple
					</button>
				</section>
				<InnerSearch searchType={urlPart1} setUrlPart2={setUrlPart2} />
				<button className='btn btn-md rounded-full btn-outline-success' disabled={!urlPart2} onClick={() => console.log('screaming crying throwing up why wont my code work')}>
					Search
				</button>
				{/* <HandleSearch urlPart1={urlPart1} urlPart2={urlPart2} /> */}
			</div>
		</>
	)
}

export default Search
