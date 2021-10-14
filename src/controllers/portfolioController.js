const Contact = require('../models/contactModel');
const Email = require('../../utils/email');
const nodemailer = require('nodemailer');

const sendEmail = async (options) => {
    // 1) Create a transporter
    const transporter = nodemailer.createTransport({
        service: 'SendGrid',
        auth: {
            user: process.env.SENDGRID_USERNAME,
            pass: process.env.SENDGRID_PASSWORD
        }
    });
  
    // 2) Define the email options
    const mailOptions = {
        from: 'Igbatayo Adetunji <adetunjiigbatayo@gmail.com>',
        to: options.email,
        subject: options.subject,
        text: options.message
    };
  
    // 3) Actually send the email
    await transporter.sendMail(mailOptions);
};

exports.getPortfolioPage = (req, res) => {
    try {
        res.status(200).render('portfolio', {
            title: 'My Portfolio Page'
        });
    } catch (error) {
        console.log(error);
    }
};

exports.contactMe = async (req, res) => {
    try {
        const contact = await Contact.create(req.body);

        res.status(200).render('successful', {
            title: 'Success!'
        });
        
        await new Email(contact, 1).sendMessage();

        await sendEmail({
            email: 'adetunjiigbatayo@gmail.com',
            subject: 'Contact you',
            message: 'Someone has tried to contact through your portfolio page'
        });

    } catch (error) {
        console.log(error, error.message);
    }
};