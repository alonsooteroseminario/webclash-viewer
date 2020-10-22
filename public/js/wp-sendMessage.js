const { text } = require('express');

require('dotenv').config();

const accountSid = process.env.ACCOUNT_SID;
const authToken = process.env.AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

function send_whatsapp() {


  client.messages.create({
    from: 'whatsapp:+14155238886',
    //id=chat-input
    body: 'Hi bimmer! I´m webclash.io, your web tool for clash detection. \nYou have to check the next link to view your clash review. Check it out here: https://webclash-viewer.herokuapp.com/ ',
    //
    to: 'whatsapp:+56956942823',
    // mediaUrl: './images/andy.png'
  }).then(message => console.log(message.sid));
}



