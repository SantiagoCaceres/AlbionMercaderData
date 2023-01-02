import express from "express"
import {dirname, join} from 'path'
import { fileURLToPath } from "url"
import {router} from './routes/index.js'

const port=process.env.PORT || 3000;
const indexRoutes=router
const app = express()
const __dirname =dirname(fileURLToPath(import.meta.url))
app.use(indexRoutes)

app.set('views',join(__dirname,'views'))
app.set('view engine', 'ejs')
app.use(indexRoutes)
app.use("/styles",express.static(__dirname + "/styles"));
app.use("/scripts",express.static(__dirname + "/scripts"));
app.listen(port)
console.log('Server on port ', port);

