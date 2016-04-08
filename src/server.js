import express from 'express'
import path from 'path'
const app = express()
const root = path.resolve(`${__dirname}/../public`)
app.use(express.static(root))
app.use((req, res) => res.sendFile(`${root}/index.html`))
// eslint-disable-next-line no-console
app.listen(process.env.PORT || 8080, () => console.log('server started'))
