import axios from 'axios'
//const axios = require("axios")

const numberOfPictures = 100

/* getNasaPictures
	
	Returns the indicated number of pictures from the APOD API.
	It may be fewer pictures than the specified if some of them
	don't fulfill all the requirements.
 */
export const getNasaPictures = async () => {
    
	let pictures = []
	try {
		const { data } = await axios.get(
            `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=${numberOfPictures}`
			//`https://api.nasa.gov/planetary/apod?api_key=${process.env.NASA_API_KEY}&count=${numberOfPictures}`
		)
		for (const picture of data) {
			const { explanation, hdurl, title, url } = picture
			if(!explanation || !hdurl || !title || !url) continue
			pictures.push({
				explanation: explanation,
				hdurl: hdurl,
				title: title,
				url: url,
			})
		}
	} catch (error) {
		console.log("Error getting the pictures from the NASA API\n", error)
	}
	return pictures
}
