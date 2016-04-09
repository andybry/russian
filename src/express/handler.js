const template = (content) => (
`<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" href="/style.css">
    <title>Russian Words</title>
  </head>
  <body>
    <div id="root">${content}</div>
    <script src="/bundle.js"></script>
  </body>
</html>
`)

export default (req, res) => {
  const app = '' // server side rendered app goes here
  const page = template(app)
  return res.send(page)
}
