const { Router } = require('express')
const numberOfPictures = 100
const router = Router();

const fetch = require('node-fetch');

router.get('/', async (req, res) => {
    //const response = await fetch('https://jsonplaceholder.typicode.com/users')
    //const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${process.env.NASA_API_KEY}&count=${numberOfPictures}`)
    const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=${numberOfPictures}`)
    const users = await response.json();
    //console.log(users);
    res.json(users);

});

module.exports = router;

//const axios = require("axios")

//const numberOfPictures = 100

/* getNasaPictures
	
	Returns the indicated number of pictures from the APOD API.
	It may be fewer pictures than the specified if some of them
	don't fulfill all the requirements.
 */
/*const getNasaPictures = async () => {
	let pictures = []
	try {
		const { data } = await axios.get(
			`https://api.nasa.gov/planetary/apod?api_key=${process.env.NASA_API_KEY}&count=${numberOfPictures}`
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

module.exports = { getNasaPictures }*/