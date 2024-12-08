const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.post('/send-email', (req, res) => {
    const { to, subject, message } = req.body;

    // Nodemailer yapılandırması
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'sizin-email@gmail.com',
            pass: 'email-şifreniz'
        }
    });

    const mailOptions = {
        from: 'sizin-email@gmail.com',
        to,
        subject,
        text: message
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            return res.status(500).send("E-posta gönderilemedi.");
        }
        res.status(200).send("E-posta başarıyla gönderildi.");
    });
});

app.listen(3000, () => {
    console.log('Sunucu çalışıyor: http://localhost:3000');
});