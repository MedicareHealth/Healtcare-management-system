import bodyParser from 'body-parser'
import compression from 'compression'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import express from 'express'
import http from 'http'
import dotenv from 'dotenv'
dotenv.config({ path: `.env.${process.env.NODE_ENV}` })
const app = express()

app.use(cors({
    Credential: true
}))

app.use(compression())
app.use(cookieParser())
app.use(bodyParser.json())

const server = http.createServer(app)
server.listen(8080, () => {
    console.log("-----------server running on http://localhost:8080-----------")
})

const db_url = process.env.MONGO_URL
console.log(db_url)