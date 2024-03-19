const emailService = require('../services/emailServices');

exports.sendEmail = async (req, res) => {
  const { name, number, email, message } = req.body;

  try {
    await emailService.sendEmail(name, number, email, message);
    res.sendStatus(200);
  } catch (error) {
    console.error('Erreur lors de l\'envoi du message :', error);
    res.status(500).send('Une erreur s\'est produite lors de l\'envoi de l\'e-mail.');
  }
};
