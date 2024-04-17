import PropTypes from 'prop-types'

function InnerSearch({ searchType, setUrlPart2 }) {
	if (searchType === '') {
		return (
			<>
				<p className='text-sm italic'>Choose a search type.</p>
			</>
		)
	} else if (searchType[searchType.length - 1] !== 's') {
		return (
			<>
				<h2>Single Search</h2>
			</>
		)
	} else {
		return (
			<>
				<section>
					<h2 className='text-center mb-4'>Quick Search:</h2>
					<div className='flex flex-row gap-4 items-center'>
						<button className='btn btn-md rounded-full btn-outline' onClick={() => setUrlPart2('random')}>
							Random
						</button>
						<button className='btn btn-md rounded-full btn-outline' onClick={() => setUrlPart2('new')}>
							New
						</button>
						<button className='btn btn-md rounded-full btn-outline' onClick={() => setUrlPart2('top')}>
							Popular
						</button>
					</div>
				</section>
			</>
		)
	}
}

InnerSearch.propTypes = {
	searchType: PropTypes.string,
	setUrlPart2: PropTypes.func,
}

export default InnerSearch