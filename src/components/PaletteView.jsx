import { useState } from 'react'
import AddPalette from './AddPalette'

function PaletteView() {
	const [palettes, setPalettes] = useState(
		JSON.parse(localStorage.getItem('palettes')) || [
			{
				id: 0,
				title: 'Example Palette',
				colors: [
					{
                        id: 14,
                        title: "Black",
                        userName: "ninjascience",
                        numViews: 156817,
                        numVotes: 1531,
                        numComments: 1789,
                        numHearts: 4.5,
                        rank: 1,
                        dateCreated: "2004-12-17 08:36:26",
                        hex: "000000",
                        rgb: {
                            red: 0,
                            green: 0,
                            blue: 0
                        },
                        hsv: {
                            hue: 0,
                            saturation: 0,
                            value: 0
                        },
                        description: "<a href=\"http://www.colourlovers.com/color/69636F/Store_me_Storm\" target=\"_blank\"><img src=\"http://static.colourlovers.com/images/colors/2618/2618826i.jpg\" /></a><a href=\"http://www.colourlovers.com/color/A79DA9/Not_Flying_Elephant\" target=\"_blank\"><img src=\"http://static.colourlovers.com/images/colors/2620/2620182i.jpg\" /></a>\r\n<div style=\"max-width: 400px ;margin-left: auto; margin-right: auto; text-align: center; color:#ebf2f5; border: 4px dotted #6b6b6b; font-size:112%; font-family:palatino linotype, palatino, serif; line-height:1.5; padding:12px; background-color: #1b1b1f; background-image: -moz-linear-gradient(top, #1b1b1f, #31314a); background-image: -webkit-gradient(linear,left top,left bottom,color-stop(0, #1b1b1f),color-stop(1, #31314a)); filter: progid:DXImageTransform.Microsoft.gradient(startColorStr=",
                        url: "http://www.colourlovers.com/color/000000/Black",
                        imageUrl: "http://www.colourlovers.com/img/000000/100/100/Black.png",
                        badgeUrl: "http://www.colourlovers.com/images/badges/c/0/14_Black.png",
                        apiUrl: "http://www.colourlovers.com/api/color/000000"
                    },
					{
                        id: 74,
                        title: "Grr-ey",
                        userName: "RedDragon",
                        numViews: 89338,
                        numVotes: 478,
                        numComments: 83,
                        numHearts: 4,
                        rank: 12,
                        dateCreated: "2004-12-19 23:27:20",
                        hex: "333333",
                        rgb: {
                            red: 51,
                            green: 51,
                            blue: 51
                        },
                        hsv: {
                            hue: 0,
                            saturation: 0,
                            value: 20
                        },
                        description: "<a href=\"http://www.colourlovers.com/color/69636F/Store_me_Storm\" target=\"_blank\"><img src=\"http://static.colourlovers.com/images/colors/2618/2618826i.jpg\" /></a><a href=\"http://www.colourlovers.com/color/A79DA9/Not_Flying_Elephant\" target=\"_blank\"><img src=\"http://static.colourlovers.com/images/colors/2620/2620182i.jpg\" /></a>\r\n<div style=\"max-width: 400px ;margin-left: auto; margin-right: auto; text-align: center; color:#ebf2f5; border: 4px dotted #6b6b6b; font-size:112%; font-family:palatino linotype, palatino, serif; line-height:1.5; padding:12px; background-color: #1b1b1f; background-image: -moz-linear-gradient(top, #1b1b1f, #31314a); background-image: -webkit-gradient(linear,left top,left bottom,color-stop(0, #1b1b1f),color-stop(1, #31314a)); filter: progid:DXImageTransform.Microsoft.gradient(startColorStr=",
                        url: "http://www.colourlovers.com/color/333333/Grr-ey",
                        imageUrl: "http://www.colourlovers.com/img/333333/100/100/Grr-ey.png",
                        badgeUrl: "http://www.colourlovers.com/images/badges/c/0/74_Grr-ey.png",
                        apiUrl: "http://www.colourlovers.com/api/color/333333"
                    },
					{
                        id: 128,
                        title: "all cs",
                        userName: "COLOURlover",
                        numViews: 28402,
                        numVotes: 263,
                        numComments: 47,
                        numHearts: 0,
                        rank: 35,
                        dateCreated: "2004-12-28 10:16:22",
                        hex: "CCCCCC",
                        rgb: {
                            red: 204,
                            green: 204,
                            blue: 204
                        },
                        hsv: {
                            hue: 0,
                            saturation: 0,
                            value: 80
                        },
                        description: "<a href=\"http://www.colourlovers.com/color/69636F/Store_me_Storm\" target=\"_blank\"><img src=\"http://static.colourlovers.com/images/colors/2618/2618826i.jpg\" /></a><a href=\"http://www.colourlovers.com/color/A79DA9/Not_Flying_Elephant\" target=\"_blank\"><img src=\"http://static.colourlovers.com/images/colors/2620/2620182i.jpg\" /></a>\r\n<div style=\"max-width: 400px ;margin-left: auto; margin-right: auto; text-align: center; color:#ebf2f5; border: 4px dotted #6b6b6b; font-size:112%; font-family:palatino linotype, palatino, serif; line-height:1.5; padding:12px; background-color: #1b1b1f; background-image: -moz-linear-gradient(top, #1b1b1f, #31314a); background-image: -webkit-gradient(linear,left top,left bottom,color-stop(0, #1b1b1f),color-stop(1, #31314a)); filter: progid:DXImageTransform.Microsoft.gradient(startColorStr=",
                        url: "http://www.colourlovers.com/color/CCCCCC/all_cs",
                        imageUrl: "http://www.colourlovers.com/img/CCCCCC/100/100/all_cs.png",
                        badgeUrl: "http://www.colourlovers.com/images/badges/c/0/128_all_cs.png",
                        apiUrl: "http://www.colourlovers.com/api/color/CCCCCC"
                    },
					{
                        id: 13537,
                        title: "Ebonics 444",
                        userName: "il morto",
                        numViews: 39371,
                        numVotes: 241,
                        numComments: 76,
                        numHearts: 5,
                        rank: 45,
                        dateCreated: "2005-09-17 04:19:01",
                        hex: "F0F0F0",
                        rgb: {
                            red: 240,
                            green: 240,
                            blue: 240
                        },
                        hsv: {
                            hue: 0,
                            saturation: 0,
                            value: 94
                        },
                        description: "<a href=\"http://www.colourlovers.com/color/69636F/Store_me_Storm\" target=\"_blank\"><img src=\"http://static.colourlovers.com/images/colors/2618/2618826i.jpg\" /></a><a href=\"http://www.colourlovers.com/color/A79DA9/Not_Flying_Elephant\" target=\"_blank\"><img src=\"http://static.colourlovers.com/images/colors/2620/2620182i.jpg\" /></a>\r\n<div style=\"max-width: 400px ;margin-left: auto; margin-right: auto; text-align: center; color:#ebf2f5; border: 4px dotted #6b6b6b; font-size:112%; font-family:palatino linotype, palatino, serif; line-height:1.5; padding:12px; background-color: #1b1b1f; background-image: -moz-linear-gradient(top, #1b1b1f, #31314a); background-image: -webkit-gradient(linear,left top,left bottom,color-stop(0, #1b1b1f),color-stop(1, #31314a)); filter: progid:DXImageTransform.Microsoft.gradient(startColorStr=",
                        url: "http://www.colourlovers.com/color/F0F0F0/Ebonics_444",
                        imageUrl: "http://www.colourlovers.com/img/F0F0F0/100/100/Ebonics_444.png",
                        badgeUrl: "http://www.colourlovers.com/images/badges/c/13/13537_Ebonics_444.png",
                        apiUrl: "http://www.colourlovers.com/api/color/F0F0F0"
                    },
					{
                        id: 16,
                        title: "white",
                        userName: "COLOURlover",
                        numViews: 200354,
                        numVotes: 1121,
                        numComments: 1138,
                        numHearts: 4.5,
                        rank: 2,
                        dateCreated: "2004-12-17 09:09:46",
                        hex: "FFFFFF",
                        rgb: {
                            red: 255,
                            green: 255,
                            blue: 255
                        },
                        hsv: {
                            hue: 0,
                            saturation: 0,
                            value: 100
                        },
                        description: "<a href=\"http://www.colourlovers.com/color/69636F/Store_me_Storm\" target=\"_blank\"><img src=\"http://static.colourlovers.com/images/colors/2618/2618826i.jpg\" /></a><a href=\"http://www.colourlovers.com/color/A79DA9/Not_Flying_Elephant\" target=\"_blank\"><img src=\"http://static.colourlovers.com/images/colors/2620/2620182i.jpg\" /></a>\r\n<div style=\"max-width: 400px ;margin-left: auto; margin-right: auto; text-align: center; color:#ebf2f5; border: 4px dotted #6b6b6b; font-size:112%; font-family:palatino linotype, palatino, serif; line-height:1.5; padding:12px; background-color: #1b1b1f; background-image: -moz-linear-gradient(top, #1b1b1f, #31314a); background-image: -webkit-gradient(linear,left top,left bottom,color-stop(0, #1b1b1f),color-stop(1, #31314a)); filter: progid:DXImageTransform.Microsoft.gradient(startColorStr=",
                        url: "http://www.colourlovers.com/color/FFFFFF/white",
                        imageUrl: "http://www.colourlovers.com/img/FFFFFF/100/100/white.png",
                        badgeUrl: "http://www.colourlovers.com/images/badges/c/0/16_white.png",
                        apiUrl: "http://www.colourlovers.com/api/color/FFFFFF"
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

    function deletePalette(paletteId) {
        const updatedPalettes = palettes.filter((palette) => palette.id !== paletteId)
        setPalettes(updatedPalettes)
        localStorage.setItem('palettes', JSON.stringify(updatedPalettes))
    }

	return (
		<>
			<div className='flex flex-col gap-6 items-center'>
                <AddPalette setPalettes={setPalettes}/>
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
                            <button className='btn btn-sm' onClick={() => deletePalette(palette.id)}>Delete Palette</button>
						</div>
					)
				})}
			</div>
		</>
	)
}

export default PaletteView