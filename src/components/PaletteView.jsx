import { useState } from 'react'

function PaletteView() {
	const [palettes, setPalettes] = useState(
		JSON.parse(localStorage.getItem('palettes')) || [
			{
				id: 0,
				title: 'Example Palette',
				colors: [
					{
						id: 0,
						hex: '0A100D',
						title: 'Night',
						imageUrl: 'https://www.colorhexa.com/0a100d.png',
					},
					{
						id: 1,
						hex: 'B9BAA3',
						title: 'Ash Gray',
						imageUrl: 'https://www.colorhexa.com/B9BAA3.png',
					},
					{
						id: 2,
						hex: 'D6D5C9',
						title: 'Timberwolf',
						imageUrl: 'https://www.colorhexa.com/D6D5C9.png',
					},
					{
						id: 3,
						hex: 'A22C29',
						title: 'Auburn',
						imageUrl: 'https://www.colorhexa.com/A22C29.png',
					},
					{
						id: 4,
						hex: '73201C',
						title: 'Falu Red',
						imageUrl: 'https://www.colorhexa.com/73201C.png',
					},
				],
			},
		]
	)

	function removeColor(paletteId, colorId) {
		const updatedPalettes = palettes.map((palette) => {
            if (palette.id === paletteId) {
                palette.colors = palette.colors.filter((color) => color.id !== colorId)
            }
            return palette
        })
        setPalettes(updatedPalettes)
        localStorage.setItem('palettes', JSON.stringify(updatedPalettes))
	}

	return (
		<>
			<div className='flex flex-col gap-6'>
				{palettes.map((palette) => {
					return (
						<div key={palette.id} className='flex flex-col gap-4 items-center'>
							<h2>{palette.title}</h2>
							<section className='flex flex-row items-center gap-4'>
								{palette.colors.map((color) => {
									return (
										<article key={color.id}>
											<img src={color.imageUrl} alt={color.title} />
											<button className='btn btn-sm w-full rounded-none' onClick={() => removeColor(palette.id, color.id)}>
												Remove
											</button>
										</article>
									)
								})}
							</section>
						</div>
					)
				})}
			</div>
		</>
	)
}

export default PaletteView