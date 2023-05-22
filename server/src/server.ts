import 'dotenv/config'

import fastify from 'fastify'
import cors from '@fastify/cors'
import multipart from '@fastify/multipart'

// Routes
import { uploadRoutes } from './routes/upload'
import { authRoutes } from './routes/auth'
import { memoriesRoutes } from './routes/memories'

import jwt from '@fastify/jwt'
import { resolve } from 'node:path'

const app = fastify()

app.register(multipart)

app.register(require('@fastify/static'), {
  root: resolve(__dirname, '../uploads'),
  prefix: '/uploads',
})

app.register(memoriesRoutes)
app.register(authRoutes)
app.register(uploadRoutes)

app.register(cors, {
  origin: true,
})

app.register(jwt, {
  secret: 'spacetime',
})
app
  .listen({
    port: 3333,
    host: '0.0.0.0',
  })
  .then(() => {
    console.log('SERVER IS RUNNING 👌')
  })
