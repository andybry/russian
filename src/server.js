import express from 'express'
import path from 'path'
import { addHotMiddleware, hotReloadIn } from './express/hot'
import handler from './express/handler'
const app = express()
addHotMiddleware(app)
const root = path.resolve(`${__dirname}/../public`)
app.use(express.static(root))
let rootHandler = handler
app.use((req, res) => rootHandler(req, res))
// eslint-disable-next-line no-console
app.listen(process.env.PORT || 8080, () => console.log('server started'))
hotReloadIn(__dirname, () => {
  rootHandler = require('./express/handler').default
})
