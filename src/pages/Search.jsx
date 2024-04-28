import { useState } from 'react'
import { useParams } from 'react-router-dom'
import InnerSearch from '../components/InnerSearch'
import useFetch from '../useFetch'
import Modal from 'react-modal'

Modal.setAppElement('#root')

function Search() {
	const selection = useParams().type
	const [detailed, setDetailed] = useState(false)
	const [searchType, setSearchType] = useState('')
	const [parameters, setParameters] = useState()
	const [offset, setOffset] = useState(0)

	const { data, loading, error } = useFetch(selection, searchType, parameters, offset)

	const [current, setCurrent] = useState(null)
	const [modalIsOpen, setIsOpen] = useState(false)

	function handleFavorite() {
		const favorites = JSON.parse(localStorage.getItem('favorites')) || []
		if (favorites.some((favorite) => favorite.id === current.id)) {
			alert('This color palette is already in your favorites.')
		} else {
			favorites.push(current)
			localStorage.setItem('favorites', JSON.stringify(favorites))
			setIsOpen(false)
		}
	}

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
							<button className='btn rounded-full btn-outline' onClick={() => setSearchType('random')}>
								Random
							</button>
							<button className='btn rounded-full btn-outline' onClick={() => setSearchType('new')}>
								New
							</button>
							<button className='btn rounded-full btn-outline' onClick={() => setSearchType('top')}>
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
				{loading ? (
					<p className='py-6'>Loading...</p>
				) : data ? (
					<>
						<h2 className='pt-6'>Search Results</h2>
						<div className='flex flex-row flex-wrap gap-6 max-w-[500px] items-center justify-evenly py-8'>
							{data.map((item) => {
								return (
									<button
										key={item.id}
										onClick={() => {
											setCurrent(item)
											setIsOpen(true)
										}}
									>
										<img src={item.imageUrl} alt={item.title} />
									</button>
								)
							})}
						</div>
						<section className='flex flex-row items-center justify-between w-full max-w-[500px]'>
							<button className='btn btn-sm' disabled={offset === 0} onClick={() => setOffset(offset - 1)}>
								Previous
							</button>
							<button className='btn btn-sm' onClick={() => setOffset(offset + 1)}>
								Next
							</button>
						</section>
						<p className='font-bold text-sm text-center my-4'>{error ? error : 'Displaying Your Search Results'}</p>
						{current ? (
							<Modal isOpen={modalIsOpen} contentLabel='Detail View'>
								<div className='flex flex-row items-center justify-center gap-8 h-full w-full p-16'>
									<img className='w-80' src={current.imageUrl} alt={current.title} />
									<section>
										<h2 className='text-2xl pb-6 capitalize'>{current.title}</h2>
										<p className='mb-2'>COLOURlovers Creator: {current.userName}</p>
										<p className='mb-2'>Number of Votes: {current.numVotes}</p>
										<p className='mb-2'>Rank on COLOURlovers.com: {current.rank}</p>
										<p className='mb-2'>{current.hex ? `Hex Code: #${current.hex}` : ''}</p>
										<p className='mb-2'>{current.rgb ? `RGB: rgb(${current.rgb.red}, ${current.rgb.green}, ${current.rgb.blue})` : ''}</p>
										<p className='mb-2'>{current.hsv ? `HSV: hsv(${current.hsv.hue}, ${current.hsv.saturation}, ${current.hsv.value})` : ''}</p>
										<p className='mb-2'>
											{current.colors ? (
												<>
													Colors:
													{current.colors.map((color, index) => {
														return <span key={index}> #{color}</span>
													})}
												</>
											) : (
												''
											)}
										</p>
										<div className='flex flex-row items-center gap-4 mt-6'>
											<button className='btn rounded-full btn-neutral' onClick={handleFavorite}>Add to Favorites</button>
											<button
												className='btn rounded-full btn-outline'
												onClick={() => {
													setIsOpen(false)
													setCurrent(null)
												}}
											>
												Close
											</button>
										</div>
									</section>
								</div>
							</Modal>
						) : (
							''
						)}
					</>
				) : (
					<p className='py-6'>Sorry, no results could be found. The COLOURlovers API may be down, please try again later.</p>
				)}
			</div>
		</>
	)
}

export default Search
