const path = require('path');
const express = require('express');
require('dotenv').config();
const cors = require('cors')
const PORT = process.env.PORT || 3000;
const config = require('./config');
if (config.credentials.client_id == null || config.credentials.client_secret == null) {
    console.error('Missing FORGE_CLIENT_ID or FORGE_CLIENT_SECRET env. variables.');
}



let app = express();
app.use(cors())
if(process.env.NODE_ENV === 'production'){
    app.use(express.static('/dist'))
    app.get('*', (req, res)=>{
        res.sendFile(path.join(__dirname,  'dist', 'index.html'))
    })
}
else{
    app.use(express.static(path.join(__dirname, 'public')));
}

app.use(express.json({ limit: '800mb' }));
app.use('/api/forge/oauth', require('./routes/oauth'));
app.use('/api/forge/oss', require('./routes/oss'));
app.use('/api/forge/modelderivative', require('./routes/modelderivative'));

app.use((err, req, res, next) => {
    console.error(err);
    res.status(err.statusCode).json(err);
});



app.listen(PORT, () => { console.log(`Server listening on port ${PORT}`); });
