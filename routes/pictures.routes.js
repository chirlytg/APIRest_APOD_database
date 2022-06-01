import { Router } from 'express'

import {
    getPictures,
    createPictures,
    updatePictures,
    getPicture,
    deletePictures
} from '../controllers/pictures.controller.js'

const router = Router()

router.get('/pictures',getPictures)

router.post('/pictures', createPictures)

router.put('/pictures/:id', updatePictures)

router.delete('/pictures/:id', deletePictures)

router.get('/pictures/:id', getPicture)

export default router