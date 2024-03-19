const nodemailer = require('nodemailer');
const nodemailerConfig = require('../config/nodemailerConfig');

exports.sendEmail = async (name, number,email, message) => {
  const transporter = nodemailer.createTransport(nodemailerConfig);

  const mailOptions = {
    from: email,
    to: 'jcsgroup24@gmail.com',
    subject: 'Nouveau message depuis votre site web JCS Group',
    text: `Nom: ${name}\nNuméro: ${number}\nEmail: ${email}\nMessage: ${message}`,
  };

  await transporter.sendMail(mailOptions);
};
