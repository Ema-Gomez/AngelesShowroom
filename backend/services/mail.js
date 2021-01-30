const nodemailer = require("nodemailer");

//Servicio para envio de Mail 
const enviarMail = async ({ email, subject = "Gracias por registrarte", message }) => {
  try {
    const transporter = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASSWORD,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });
    const info = {
      to: email,
      subject: subject,
      html: message,
    };
    const { messageId } = await transporter.sendMail(info);
    return messageId;
  } catch (e) {
    console.log(e);
  }
};

module.exports = { enviarMail };
