// const config = require('./config');
// const accountSid = config.credentials.accountSid;
// const authToken = config.credentials.twilio_token;
require('dotenv').config();

const accountSid = process.env.ACCOUNT_SID;
const authToken = process.env.AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

client.messages.create({
  from: 'whatsapp:+14155238886',
body: "Hi Abelito!, I'm webclash, and we are sending you a link to view the 3d along with several images, enjoy them! \n https://webclash-viewer.herokuapp.com/",
  to: 'whatsapp:+56956942823'
}).then(message => console.log(message.sid));