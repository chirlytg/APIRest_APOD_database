import mongoose from 'mongoose'

const MONGODB_URI= 'mongodb+srv://stg:stgpassword@cluster0.uvbet.mongodb.net/?retryWrites=true&w=majority'

export async function conectToDB(){
    try {
        await mongoose.connect(MONGODB_URI) 
        console.log('MongoDB connected')
    } catch (error) {
        console.error(error)
    }
}

/*
let db = mongoose.connection

db.once("open", async () => {
	if ((await Picture.countDocuments().exec()) > 0) {
		console.log("Database already populated")
		return
	}

	console.log("Populating database...")
	const nasaPictures = await nasaAPI.getNasaPictures()

	await Picture.insertMany(nasaPictures, error => {
		if (error) {
			return console.error(error)
		} else {
			console.log("Initial pictures added")
		}
	})
})*/


