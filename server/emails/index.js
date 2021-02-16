const sgMail = require('@sendgrid/mail');
const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;

sgMail.setApiKey(SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: `${process.env.FROM_EMAIL}`,
        subject: `It's working!!!!!!`,
        text: `Oh my God, ${name}! I can't believe it works!`,
    });
};

const sendCancellationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: `${process.env.FROM_EMAIL}`,
        subject: 'Sorry to see you go.'
        text: `Bye ${name}. Hope to see you again soon.`
    });
};

module.exports = {
    sendWelcomeEmail,
    sendCancellationEmail
};

