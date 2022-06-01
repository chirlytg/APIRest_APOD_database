import mongoose from 'mongoose'
import Picture from '../models/picture.model.js'
import { getNasaPictures } from '../utils/nasaAPI.js'
//const Picture = require("../models/Picture")
//const nasaAPI = require("../services/nasaApi")

const MONGODB_URI= 'mongodb+srv://stg:stgpassword@cluster0.uvbet.mongodb.net/?retryWrites=true&w=majority'

export async function conectToDB(){
    try {
        await mongoose.connect(MONGODB_URI) 
        console.log('MongoDB connected')
		Picture.collection.deleteMany()
    } catch (error) {
        console.error(error)
    }
}

//Picture.collection.remove()
//Picture.collection.drop()
//Picture.deleteMany({})
const nasaPictures = await getNasaPictures()

Picture.insertMany(nasaPictures, error => {
	if (error) {
		return console.error(error)
	} else {
		console.log("Initial pictures added")
	}
})



