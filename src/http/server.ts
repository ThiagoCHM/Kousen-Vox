import "dotenv/config"
import fastify from 'fastify'

const app = fastify()

app.get('/hello', () => {
    return 'Bigorna Inflável não afunda!'
})

app.listen({ port: process.env.PORT }).then(() => {
    console.log('HTTP server running!')
})