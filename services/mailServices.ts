var nodemailer = require("nodemailer");
const sendEmail = async (options: any) => {
  const transporter = nodemailer.createTransport({
    host: process.env.SMPT_HOST,
    port: process.env.SMPT_PORT,
    service: process.env.SMPT_SERVICE,
    auth: {
      user: process.env.SMPT_MAIL,
      pass: process.env.SMPT_PASSWORD,
    },
  });
  const mailOptions = {
    from: process.env.SMPT_MAIL,
    to: options.to,
    subject: options.subject,
    text: options.text,
    html: options.html,
    attachments: options.attachments,
  };

  console.log("Mail Options===========================, ", mailOptions);
  await transporter.sendMail(mailOptions);
};

export default sendEmail;
