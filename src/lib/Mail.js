import nodeMailer from 'nodemailer';
import mailConfig from '../config/mail';

class Mail {
  constructor() {
    const { auth, port, secure, host } = mailConfig;

    this.transporter = nodeMailer.createTransport({
      port,
      secure,
      host,
      auth: auth.user ? auth : null,
    });
  }

  sendMail(message) {
    return this.transporter.sendMail({
      ...mailConfig.default,
      ...message,
    });
  }
}

export default new Mail();
