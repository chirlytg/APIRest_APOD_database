import mongoose from "mongoose";

const pictureSchema = new mongoose.Schema({
    explanation: {
		type: String,
		required: true,
	},
	hdurl: {
		type: String,
		required: true,
	},
	title: {
		type: String,
		required: true,
	},
	url: {
		type: String,
		required: true,
	},
})

export default mongoose.model('Picture', pictureSchema)