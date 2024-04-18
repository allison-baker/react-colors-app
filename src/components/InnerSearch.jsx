import PropTypes from 'prop-types'
import { useState } from 'react'

function InnerSearch({ selection, setParameters }) {
	const [hue1, setHue1] = useState('')
	const [hue2, setHue2] = useState('')
	const [bright1, setBright1] = useState('')
	const [bright2, setBright2] = useState('')
	const [searchTerm, setSearchTerm] = useState('')

	function handleSubmit(e) {
		e.preventDefault()
		const params = [
			{
				name: 'hueRange',
				value: `${hue1},${hue2}`,
			},
			{
				name: 'briRange',
				value: `${bright1},${bright2}`,
			},
			{
				name: 'keywords',
				value: searchTerm,
			},
		]
		setParameters(params)
	}

	if (selection === 'colors') {
		return (
			<>
				<form className='w-64'>
					<label htmlFor='hue1' className='block text-sm font-bold mb-4 text-center'>
						Lower Hue Range Value: {hue1}
						<input
							className='block range range-primary rounded-full range-xs mt-2 w-full font-normal text-base'
							type='range'
							id='hue1'
							name='hue1'
							min='1'
							max='359'
							value={hue1}
							onChange={(e) => setHue1(String(e.target.value))}
						/>
					</label>
					<label htmlFor='hue2' className='block text-sm font-bold mb-4 text-center'>
						Higher Hue Range Value: {hue2}
						<input
							className='block range range-primary rounded-full range-xs mt-2 w-full font-normal text-base'
							type='range'
							id='hue2'
							name='hue2'
							min='1'
							max='359'
							value={hue2}
							onChange={(e) => setHue2(String(e.target.value))}
						/>
					</label>
					<label htmlFor='bright1' className='block text-sm font-bold mb-4 text-center'>
						Lower Brightness Range Value: {bright1}
						<input
							className='block range range-primary rounded-full range-xs mt-2 w-full font-normal text-base'
							type='range'
							id='bright1'
							name='bright1'
							min='1'
							max='98'
							value={bright1}
							onChange={(e) => setBright1(String(e.target.value))}
						/>
					</label>
					<label htmlFor='bright2' className='block text-sm font-bold mb-4 text-center'>
						Higher Brightness Range Value: {bright2}
						<input
							className='block range range-primary rounded-full range-xs mt-2 w-full font-normal text-base'
							type='range'
							id='bright2'
							name='bright2'
							min='1'
							max='98'
							value={bright2}
							onChange={(e) => setBright2(String(e.target.value))}
						/>
					</label>
					<label htmlFor='searchTerm' className='block text-sm font-bold mb-4 text-center'>Search Term
						<input
							className='block input input-primary rounded-full input-sm mt-2 w-full font-normal text-base'
							type='text'
							placeholder='Keyword'
							id='searchTerm'
							name='searchTerm'
							value={searchTerm}
							onChange={(e) => setSearchTerm(e.target.value)}
						/>
					</label>
					<input className='btn btn-primary rounded-full w-full btn-sm mt-2' type='submit' value='Search Colors' onClick={handleSubmit} />
				</form>
			</>
		)
	} else if (selection === 'palettes') {
		return (
			<>
				<p>Palettes search coming soon</p>
			</>
		)
	} else if (selection === 'patterns') {
		return (
			<>
				<p>Patterns search coming soon</p>
			</>
		)
	}
}

InnerSearch.propTypes = {
	selection: PropTypes.string,
	setParameters: PropTypes.func,
}

export default InnerSearch
