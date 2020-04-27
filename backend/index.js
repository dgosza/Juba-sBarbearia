const express = require('express')
const app = express();
const cors = require('cors')
const sendEmail = require('./Mailer')

app.use(cors())
app.use(express.json())

app.post('/sendForm', (request, response) => {
    const {nome, email, assunto, mensagem} = request.body
    const success = sendEmail(nome, email, assunto, mensagem)
    console.log(success)
    if(success){
        response.sendStatus(200)
    }else{
        response.sendStatus(500)
    }

})


app.listen(9898);