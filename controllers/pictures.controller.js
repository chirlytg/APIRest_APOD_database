import Picture from '../models/picture.model.js'

export const getPictures = async (req, res) => {
    const pictures = await Picture.find()
    res.json(pictures)
/*
    let { limit, page, ...filters } = req.query
	limit = parseInt(limit, 10) || 10
	page = parseInt(page, 10) || 1
	filters.title = { $regex: new RegExp(filters.title, "i") }
	filters.explanation = { $regex: new RegExp(filters.explanation, "i") }
	
	try {
		const result = await pictureServices.getAllPictures(filters, {
			limit,
			page,
		})
		res.status(200).json(result)
	} catch (error) {
		res.status(error?.status || 500).json({
			status: error?.status || 500,
			error: error,
		})
	}*/

}

export const createPictures = async (req, res) => {
    console.log(req.body)
    const {explanation, hdurl, title, url} = req.body
    const picture = new Picture({
        explanation,
        hdurl,
        title,
        url
    })
    await picture.save()

    res.json(picture)
}

export const deletePictures = async (req, res) => {
    console.log(req.params.id)
    const picture = await Picture.findByIdAndDelete(req.params.id)

    if (!picture) return res.status(404).json({
        message: "No existe el producto con ese Id"
    })

    return res.json(picture)
}

export const getPicture = async (req, res) => {
    console.log(req.params.id)
    const picture = await Picture.findById(req.params.id)

    if (!picture) return res.status(404).json({
        message: "No existe el producto con ese Id"
    })

    return res.json(picture)
}

export const updatePictures = async (req, res) => {
    const {id} = req.params;

    const pictureUpdated = await Picture.findByIdAndUpdate(id, req.body, {new: true})

    return res.json(pictureUpdated)

}

