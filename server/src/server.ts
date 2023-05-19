import fastify from 'fastify'
import { PrismaClient } from '@prisma/client'

const app = fastify()
const prisma = new PrismaClient()

app.get('/hello', () => {
  return 'Hello, world'
})

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('SERVER IS RUNNING 👌')
  })
