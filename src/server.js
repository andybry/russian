const express = require('express')
const path = require('path')
const app = express()
const root = path.resolve(`${__dirname}/../public`)
app.use(express.static(root))
app.use((req, res) => res.sendFile(`${root}/index.html`))
// eslint-disable-next-line no-console
app.listen(process.env.PORT, () => console.log('server started'))
