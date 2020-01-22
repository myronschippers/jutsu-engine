const nodemailer = require('nodemailer');

/**
 * 
 * @param {*} password 
 * @param {*} userEmail 
 */
// async..await is not allowed in global scope, must use a wrapper
async function mail(password, userEmail) {
    let transportAuthOptions = {
        type: 'login',
        user: USERNAME,
        pass: PASSWORD,
    };

    if (CLIENT_ID != null && PRIVATE_KEY != null) {
        transportAuthOptions = {
            type: 'OAuth2',
            user: USERNAME,
            pass: PASSWORD,
            serviceClient: CLIENT_ID,
            privateKey: PRIVATE_KEY,
        };
    }

    console.log('Auth options: ', transportAuthOptions);

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: transportAuthOptions,
    });

    try {
        await transporter.verify();
        await transporter.sendMail({
            from: process.env.FROM, // sender address
            to: userEmail, // list of receivers
            subject: 'Your password', // Subject line
            text: password, // plain text body
            html: `
                <p>Your new password: ${password} for Kanbe's Market application</p>
                ` // html body
        });
    } catch(err) {
        console.log(err);
    }
}