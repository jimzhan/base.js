import Koa from 'koa'
import Body from 'koa-body'
import debug from 'debug'
import route from 'dekoa'

const log = debug('{debug}')

const server = new Koa()
server.use(Body({ multipart: true }))
route.bind(server, `${__dirname}/apis/*.js`, { prefix: '/v1' })

const porta = 9394
server.listen(porta, () => {
  log(`Server started at port: ${porta}`)
})

export {
  server
}
