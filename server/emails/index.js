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
        subject: 'Sorry to see you go.',
        text: `Bye ${name}. Hope to see you again soon.`
    });
};

const forgotPasswordEmail = (email, token, name) => {
    const exampleHTMLEmail = `<a target= "_blank" rel="noopener noreferrer" href="${process.env.APP_URL}/api/password/${token}">Reset Password</a>`
    sgMail.send({
        to: email,
        from: `${process.env.FROM_EMAIL}`,
        text: `Hi ${name}! Please click the link below to reset your password.`,
        subject: "Password reset." 
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancellationEmail,
    forgotPasswordEmail
};

