// import { useState } from 'react'
import { useParams } from 'react-router-dom'

function Search() {
	const selection = useParams().type
	console.log(selection)
	
	return (
		<>
			<div className='flex flex-col items-center'>
				<h1 className='text-2xl text-center m-8 capitalize'>Search {selection}</h1>
				<p className='font-bold text-sm'>Search By:</p>
				{/* <select className='select select-primary select-sm mt-2' onChange={(e) => setSelection(e.target.value)}>
					<option value='' disabled selected>
						--Choose a Search Type--
					</option>
					<option value='colors'>Colors</option>
					<option value='palettes'>Palettes</option>
					<option value='patterns'>Patterns</option>
				</select> */}
			</div>
		</>
	)
}

export default Search
