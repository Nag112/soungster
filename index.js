var express = require('express');
const sgMail = require('@sendgrid/mail');
const dotenv = require('dotenv');
dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(express.static('public'))
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
app.listen(5500);
app.get('/send_mail',(req,res)=>{
    console.log("hello");
    
    const msg = {
        to: 'admin@soungster.com',
        from: 'no-reply@soungster.com',
        subject: 'I want to get notified '+req.params.email,
        html: `<h4>Hi i am ${req.params.name},</h4><br><p>I am intrested in your platform</p>`
      };
      sgMail.send(msg).then((response)=>{
        res.send("successfully sent mail");
      }).catch((err)=>{
        res.send(err.message); res.end()});
});
