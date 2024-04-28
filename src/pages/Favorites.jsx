import { useState } from 'react'
import Modal from 'react-modal'
import PaletteView from '../components/PaletteView'

Modal.setAppElement('#root')

function Favorites() {
	const [favorites, setFavorites] = useState(JSON.parse(localStorage.getItem('favorites')) || [])
	const [view, setView] = useState('all')

	const [current, setCurrent] = useState(null)
	const [modalIsOpen, setIsOpen] = useState(false)

	function handleFavorite() {
		const updatedFavorites = favorites.filter((favorite) => favorite.id !== current.id)
		setFavorites(updatedFavorites)
		setCurrent(null)
		localStorage.setItem('favorites', JSON.stringify(updatedFavorites))
	}

	return (
		<>
			<div className='flex flex-col items-center min-h-[65vh]'>
				<h1 className='text-2xl text-center m-8'>Favorites</h1>
				<section className='flex flex-row items-center gap-16 py-6'>
					<button
						className={view === 'all' ? 'border-b-2 border-warning pb-4 px-2' : 'border-b-2 border-base-100 pb-4 px-2'}
						onClick={() => setView('all')}
					>
						All Favorites
					</button>
					<button
						className={view === 'palettes' ? 'border-b-2 border-warning pb-4 px-2' : 'border-b-2 border-base-100 pb-4 px-2'}
						onClick={() => setView('palettes')}
					>
						My Custom Palettes
					</button>
				</section>
				{view === 'palettes' ? (
					<PaletteView />
				) : (
					<div className='flex flex-row flex-wrap gap-6 max-w-[500px] items-center justify-evenly py-8'>
						{favorites.map((favorite) => {
							return (
								<button
									key={favorite.id}
									onClick={() => {
										setCurrent(favorite)
										setIsOpen(true)
									}}
								>
									<img src={favorite.imageUrl} alt={favorite.title} />
								</button>
							)
						})}
					</div>
				)}
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
									<button className='btn rounded-full btn-neutral' onClick={handleFavorite}>
										Remove From Favorites
									</button>
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
			</div>
		</>
	)
}

export default Favorites
