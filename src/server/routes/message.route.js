const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer')


router.post('/', function(req, res, next){
    const output = `
    <p>You have a new contact request</p>
    <h3>Contact Details</h3>
    <ul>  
      <li>Name: ${req.body.name}</li>
      <li>Company: ${req.body.company}</li>
      <li>Email: ${req.body.email}</li>
      <li>Phone: ${req.body.phone}</li>
    </ul>
    <h3>Message</h3>
    <p>${req.body.message}</p>
  `;


    nodemailer.createTestAccount((err, account) => {
        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
            host: 'mail.italsafaris.co.ke',
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: 'customers@italsafaris.co.ke', // generated ethereal user
                pass: 'Njeru2010' // generated ethereal password
            },
            tls:{
                rejectUnauthorized: false
            }
        });
    
        // setup email data with unicode symbols
        let mailOptions = {
            from: 'Ital Safari Website', // sender address
            to: 'rubinnjagi@yahoo.com; rubinnjagi2@gmail.com', // list of receivers
            subject: 'NEW Client ✔', // Subject line
            text: 'Hello world?', // plain text body
            html: output// html body
        };
    
        // send mail with defined transport object
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log(error);
            }else{
            console.log('Message sent: %s', info.messageId);
            // Preview only available when sending through an Ethereal account
            console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
            res.status(200).json({"msg": "mesage  has been sent"})
        } 
        
            // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
            // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
        });
    });
});
module.exports = router;