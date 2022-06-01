import Picture from '../models/picture.model.js'

export const getPictures = async (req, res) => {
    let { limit, page, ...filters } = req.query
	limit = parseInt(limit, 10) || 10
	page = parseInt(page, 10) || 1
	filters.title = { $regex: new RegExp(filters.title, "i") }
	filters.explanation = { $regex: new RegExp(filters.explanation, "i") }
	
    console.log(filters)
    const result = await Picture.paginate(filters, {limit, page, }).catch(error => {
		throw error
	})
    res.json(result)

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

