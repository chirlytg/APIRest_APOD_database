import app from './app.js'
import {conectToDB} from './utils/mongoose.js'

async function main(){
    await conectToDB()
    app.listen(3000)
    console.log('Server on port', 3000)
}

main()