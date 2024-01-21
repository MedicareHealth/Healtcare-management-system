import express from 'express'
import http from 'http'
import cors from 'cors'
import bodyParser from 'body-parser'
import cookinParser from 'cookie-parser'
import compression from 'compression'

const app = express()

app.use(cors({
    Credential: true
}))

app.use(compression())
app.use(cookinParser())
app.use(bodyParser.json())

const server = http.createServer(app)
server.listen(8080, () => {
    console.log("-----------server running on http://localhost:8080-----------")
})