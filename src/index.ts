import express from 'express'
import cors from 'cors'
import winston from 'winston'

const app = express()

app.use(cors())

const logger = winston.createLogger()

app.get('/healthcheck', (_req, res) => {
  res.json({status: 'ok'})
})

app.listen(80, '0.0.0.0', () => {
  logger.info('✨ Server is started at http://localhost')
})