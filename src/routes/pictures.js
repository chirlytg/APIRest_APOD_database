const { Router } = require('express')
const axios = require("axios")
const numberOfPictures = 1;
const router = Router();

const fetch = require('node-fetch');

router.get('/', async (_req, res) => {
    //const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=${numberOfPictures}`)
    //const users = await response.json();
    //console.log(users);
    //res.json(users);
	let pictures = []
	try {
		const { data } = await axios.get(
			//`https://jsonplaceholder.typicode.com/user`
			`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=${numberOfPictures}`
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
		console.log("Error getting the pictures from the NASA API\n")
	}
	res.json(pictures);
});

module.exports = router;