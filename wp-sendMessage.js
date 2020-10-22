const { text } = require('express');

require('dotenv').config();
const accountSid = process.env.ACCOUNT_SID;
const authToken = process.env.AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

function send_whatsApp() {

  client.messages.create({
    from: 'whatsapp:+14155238886',
    //id=chat-input
    body: 'Hi bimmer! I´m webclash.io, your web tool for clash detection. \nYou have to check the next link to view your clash review. Check it out here: https://webclash-viewer.herokuapp.com/ ',
    to: 'whatsapp:+56956942823',
    mediaUrl: ['https://images.unsplash.com/photo-1545093149-618ce3bcf49d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80'],
  }).then(message => console.log(message.sid));

}

send_whatsApp();

