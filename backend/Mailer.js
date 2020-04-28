const NodeMailer = require('nodemailer')
const Email = require('email-templates');

const enviaEmail = async (nomeProps, emailProps, assuntoProps, mensagemProps) => {

    const emailServer = ''
    const senhaServer = ''

    const emailData = NodeMailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: emailServer, // generated ethereal user
            pass: senhaServer // generated ethereal password
        }
    })

    const email = new Email({
        message: {
            from: 'niftylettuce@gmail.com',
            subject: 'Nova Mensagem de Jubas Barbearia!'
        },
        // uncomment below to send emails in development/test env:
        send: true,
        transport: emailData,
        views: {
            options: {
                //view template Ejs
                extension: 'ejs'
            }
        }
    });

    await email.send({
        template: 'mars', //pasta onde se encontra o template engine
        message: {
            to: emailProps
        },
        locals: {
            nome: nomeProps,
            email: emailProps,
            assunto: assuntoProps,
            mensagem: mensagemProps

        }
    })

}

module.exports = enviaEmail