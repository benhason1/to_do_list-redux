import Configuration from './Configuration'
import * as express from 'express'
import * as bodyParser from 'body-parser'
import ticketsRouter from './Routes/Tickets'
import usersRouter from './Routes/Users'

const app = express()
app.use(bodyParser.json())

app.use('/tickets', ticketsRouter)
app.use('/users', usersRouter)
app.listen(Configuration.ExpressAppPort)