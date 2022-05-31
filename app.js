import express from 'express'
import morgan from 'morgan'
import indexRoutes from './routes/index.routes.js'
import picturesRoutes from './routes/pictures.routes.js'


const app = express()

app.use(morgan('dev'))
app.use(express.json())

app.use(indexRoutes)
app.use(picturesRoutes)

export default app