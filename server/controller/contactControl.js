const { formatResponse } = require("../library/formatResponse");
const nodemailer = require("nodemailer");

const sendMessageMail = async (req, res) => {
  const { email, name, message } = req.query;
  //construct transport
  console.log("Email creds:", process.env.EMAIL);
  let transporter = nodemailer.createTransport({
    service: "Yahoo",
    secure: true,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
    //tls: { rejectUnauthorized: false },
  });
  //configure mail options
  let emailText = `
      <h1>You have a message from <code>${name}</code></h1>
      <h3>${email}</h3>
      <code>${message}</code>
    `;

  let mailOptions = {
    from: "portfolio.saurabh@yahoo.com",
    to: "saurabhbharti9@gmail.com",
    subject: "Portfolio Message",
    html: emailText,
  };
  //send email
  let data = await transporter.sendMail(mailOptions);
  if (data) {
    res.status(200).json(formatResponse(false, 200, "Message Sent", req.body));
  } else {
    res
      .status(500)
      .json(formatResponse(true, 500, "Interal Server Error", data));
  }
};

module.exports = {
  sendMessageMail,
};
