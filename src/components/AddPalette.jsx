import { useState } from 'react'
import PropTypes from 'prop-types'

function AddPalette({ color, setIsOpen, setPalettes }) {
    const palettes = JSON.parse(localStorage.getItem('palettes')) || []
    const [title, setTitle] = useState('')

    function handleSubmit(e) {
        e.preventDefault()
        const palette = {
            id: palettes.length,
            title: title,
            colors: color ? [color] : []
        }
        localStorage.setItem('palettes', JSON.stringify([...palettes, palette]))
        if (setIsOpen) {
            setIsOpen(false)
        }
        if (setPalettes) {
            setPalettes([...palettes, palette])
        }
        setTitle('')
    }

	return (
		<>
			<form className='pt-6 flex flex-row gap-4 items-center'>
				<input type='text' id='paletteName' placeholder='Palette Name' className='input input-bordered rounded-full' value={title} onChange={(e) => setTitle(e.target.value)} />
				<input className='btn rounded-full btn-outline' type='submit' value='Create Palette' onClick={(e) => handleSubmit(e)} />
			</form>
		</>
	)
}

AddPalette.propTypes = {
    color: PropTypes.object,
    setIsOpen: PropTypes.func,
    setPalettes: PropTypes.func
}

export default AddPalette
