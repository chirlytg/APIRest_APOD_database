const { Router } = require('express')
const axios = require("axios")
const numberOfPictures = 1;
const router = Router();

const fetch = require('node-fetch');
let pictures = [];

router.get('/', async (_req, res) => {
    //const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=${numberOfPictures}`)
    //const users = await response.json();
    //console.log(users);
    //res.json(users);
	let picturess = [];

	try {
		const { data } = await axios.get(
			//`https://jsonplaceholder.typicode.com/user`
			`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=${numberOfPictures}`
		)
		//const { data } = await fetch(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=${numberOfPictures}`)
		for (const picture of data) {
			const { explanation, hdurl, title, url } = picture
			if(!explanation || !hdurl || !title || !url) continue
			const id = picturess.length + 1;
			picturess.push({
				explanation: explanation,
				hdurl: hdurl,
				title: title,
				url: url,
				id: id,
			})
		}
	} catch (error) {
		console.log("Error getting the pictures from the NASA API\n")
	}
	res.json(picturess);
	//return pictures;
});

router.post('/', (req, res)=>{
    const {explanation, hdurl, title, url} = req.body;
    if(explanation && hdurl && title && url){ 
		const id = pictures.length + 1;
        const newpicture = {...req.body, id}; 
        pictures.push(newpicture);
        res.json(pictures);
    }else{
        res.json({error:'there was an error'});
        //res.send('wrong request')
    }
});

module.exports = router;