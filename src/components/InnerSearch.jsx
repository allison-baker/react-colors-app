import PropTypes from 'prop-types'
import { useState } from 'react'

function InnerSearch({ selection, setParameters, setSearchType }) {
	const [hue1, setHue1] = useState('')
	const [hue2, setHue2] = useState('')
	const [bright1, setBright1] = useState('')
	const [bright2, setBright2] = useState('')
	const [searchTerm, setSearchTerm] = useState('')

	function handleColorSubmit(e) {
		e.preventDefault()
		setSearchType('')
		let params = []
		if (hue1) {
			params.push({
				name: 'hueRange',
				value: `${hue1},${hue2 ? hue2 : '359'}`,
			})
		}
		if (bright1) {
			params.push({
				name: 'briRange',
				value: `${bright1},${bright2 ? bright2 : '99'}`,
			})
		}
		if (searchTerm) {
			params.push({
				name: 'keywords',
				value: searchTerm,
			})
		}
		setParameters(params)
		setHue1('')
		setHue2('')
		setBright1('')
		setBright2('')
		setSearchTerm('')
	}

	let [hues, setHues] = useState({
		red: false,
		orange: false,
		yellow: false,
		green: false,
		aqua: false,
		blue: false,
		purple: false,
		fuchsia: false,
	})
	const [hex, setHex] = useState('')
	const [hexValues, setHexValues] = useState([])

	function handlePaletteSubmit(e) {
		e.preventDefault()
		setSearchType('')
		let params = []
		let hueValues = []
		Object.keys(hues).forEach((key) => {
			if (hues[key]) {
				hueValues.push(key)
			}
		})
		if (hueValues.length > 0) {
			params.push({
				name: 'hueOption',
				value: hueValues.join(','),
			})
		}
		if (hexValues.length > 0) {
			params.push({
				name: 'hex',
				value: hexValues.join(','),
			})
		}
		console.log(params)
		setParameters(params)
		setHues({
			red: false,
			orange: false,
			yellow: false,
			green: false,
			aqua: false,
			blue: false,
			purple: false,
			fuchsia: false,
		})
		setHexValues([])
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
							min='0'
							max='358'
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
							min='0'
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
							max='99'
							value={bright2}
							onChange={(e) => setBright2(String(e.target.value))}
						/>
					</label>
					<label htmlFor='searchTerm' className='block text-sm font-bold mb-4 text-center'>
						Search Term
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
					<input className='btn btn-primary rounded-full w-full btn-sm mt-2' type='submit' value='Search Colors' onClick={handleColorSubmit} />
				</form>
			</>
		)
	} else if (selection === 'palettes') {
		return (
			<>
				<form>
					<fieldset>
						<legend className='text-sm font-bold text-center mb-2'>Hues</legend>
						<div className='grid grid-cols-2 mb-2'>
							<label htmlFor='red' className='mb-4 text-center flex items-center gap-2'>
								<input
									id='red'
									checked={hues.red}
									name='red'
									type='checkbox'
									className='checkbox checkbox-xs checkbox-secondary rounded-full'
									onChange={(e) => setHues({ ...hues, red: e.target.checked })}
								/>
								Red
							</label>
							<label htmlFor='orange' className='mb-4 text-center flex items-center gap-2'>
								<input
									id='orange'
									checked={hues.orange}
									name='orange'
									type='checkbox'
									className='checkbox checkbox-xs checkbox-secondary rounded-full'
									onChange={(e) => setHues({ ...hues, orange: e.target.checked })}
								/>
								Orange
							</label>
							<label htmlFor='yellow' className='mb-4 text-center flex items-center gap-2'>
								<input
									id='yellow'
									checked={hues.yellow}
									name='yellow'
									type='checkbox'
									className='checkbox checkbox-xs checkbox-secondary rounded-full'
									onChange={(e) => setHues({ ...hues, yellow: e.target.checked })}
								/>
								Yellow
							</label>
							<label htmlFor='green' className='mb-4 text-center flex items-center gap-2'>
								<input
									id='green'
									checked={hues.green}
									name='green'
									type='checkbox'
									className='checkbox checkbox-xs checkbox-secondary rounded-full'
									onChange={(e) => setHues({ ...hues, green: e.target.checked })}
								/>
								Green
							</label>
							<label htmlFor='aqua' className='mb-4 text-center flex items-center gap-2'>
								<input
									id='aqua'
									checked={hues.aqua}
									name='aqua'
									type='checkbox'
									className='checkbox checkbox-xs checkbox-secondary rounded-full'
									onChange={(e) => setHues({ ...hues, aqua: e.target.checked })}
								/>
								Aqua
							</label>
							<label htmlFor='blue' className='mb-4 text-center flex items-center gap-2'>
								<input
									id='blue'
									checked={hues.blue}
									name='blue'
									type='checkbox'
									className='checkbox checkbox-xs checkbox-secondary rounded-full'
									onChange={(e) => setHues({ ...hues, blue: e.target.checked })}
								/>
								Blue
							</label>
							<label htmlFor='purple' className='mb-4 text-center flex items-center gap-2'>
								<input
									id='purple'
									checked={hues.purple}
									name='purple'
									type='checkbox'
									className='checkbox checkbox-xs checkbox-secondary rounded-full'
									onChange={(e) => setHues({ ...hues, purple: e.target.checked })}
								/>
								Purple
							</label>
							<label htmlFor='fuchsia' className='mb-4 text-center flex items-center gap-2'>
								<input
									id='fuchsia'
									checked={hues.fuchsia}
									name='fuchsia'
									type='checkbox'
									className='checkbox checkbox-xs checkbox-secondary rounded-full'
									onChange={(e) => setHues({ ...hues, fuchsia: e.target.checked })}
								/>
								Fuchsia
							</label>
						</div>
					</fieldset>
					<label className='block text-sm font-bold mb-2 text-center'>
						Hex Values
						<input
							className='block input input-secondary rounded-full input-sm mt-2 w-full font-normal text-base'
							type='text'
							value={hex}
							placeholder='Search Term'
							onChange={(e) => setHex(e.target.value)}
						/>
						<button
							className='btn btn-sm rounded-full w-full mt-2'
							onClick={(e) => {
								e.preventDefault()
								setHexValues([...hexValues, hex])
								setHex('')
							}}
						>
							Save
						</button>
					</label>
					<div className='grid grid-cols-2 mb-2'>
						{hexValues.map((hex, index) => {
							return <p key={index}>{hex}</p>
						})}
					</div>
					<input type='submit' value='Search Palettes' className='btn btn-secondary rounded-full w-full btn-sm mt-2' onClick={handlePaletteSubmit} />
				</form>
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
	selection: PropTypes.string.isRequired,
	setParameters: PropTypes.func,
	setSearchType: PropTypes.func.isRequired,
}

export default InnerSearch
