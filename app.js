const express = require('express')
const nodemailer = require('nodemailer')
require('dotenv').config()
const app = express()

const port = 3000

const user = process.env.EMAIL
const pass = process.env.PASSWORD
let body 
body += '<h3>Olá</h3>'
body += '<p>Não me ignore</p>'

app.get('/', (req, res) => res.send('Hello World'))
app.get('/send', (req, res) => {
  const trasporter = nodemailer.createTransport({
    service: 'gmail',
//  host: smtp,
//  port: port of email,
    auth: {user, pass}
  })

  let mailOpt = {
    from: user,
    to: user, // for tests
    replyTo: "matheuscassiano9@gmail.com",
    subject: "Testing send mail",
    text: body
  }

  trasporter.sendMail(mailOpt).then(info=>{
    res.send(info)
  }).catch(error => {
    res.send(error)
  })
})

app.listen(port, () => console.log(`Running on port ${port}`))