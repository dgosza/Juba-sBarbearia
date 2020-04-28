const express = require('express')
const app = express();
const cors = require('cors')
const sendEmail = require('./Mailer')

app.use(cors())
app.use(express.json())

app.post('/sendForm', (request, response) => {
    const { nome, email, assunto, mensagem } = request.body
    sendEmail(nome, email, assunto, mensagem)
    response.sendStatus(200)

})


app.listen(9898);