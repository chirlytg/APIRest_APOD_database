const { Router } = require('express')
const axios = require("axios")
const numberOfPictures = 2;
const router = Router();

const fetch = require('node-fetch');
let picturesGlobal = [];
let idGlobal = 0;

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
			const id = pictures.length + 1; 
			pictures.push({
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
	res.json(pictures.concat(picturesGlobal));
	idGlobal = pictures.length;
	//picturesGlobal = pictures.slice();
});

router.post('/', (req, res)=>{
    const {explanation, hdurl, title, url} = req.body;
    if(explanation && hdurl && title && url){
        const id = idGlobal + picturesGlobal.length + 1; 
        const newpicture = {...req.body, id}; 
        picturesGlobal.push(newpicture);
        res.json(picturesGlobal);
    }else{
        res.json({error:'there was an error'});
        //res.send('wrong request')
    }
});

/*
router.put('/:id', (req, res) => {
    const { id }= picturesGlobal.length + 1;
    const {explanation, hdurl, title, url} = req.body;
    if (explanation && hdurl && title && url){
        _.each(picturesGlobal, (picture, i)=>{
                picture.explanation = explanation;
                picture.hdurl = hdurl;
                picture.title = title;
				picture.url = url;
				picture.id = id;
        });
        res.json(picturesGlobal);
    }else{
        res.status(500).json({error: 'There was an error.'})
    }
});*/

module.exports = router;