// Autodesk Forge configuration
module.exports = {
    // Set environment variables or hard-code here
    credentials: {
        client_id: process.env.FORGE_CLIENT_ID_UPLOAD,
        client_secret: process.env.FORGE_CLIENT_SECRET_UPLOAD,
        callback_url: process.env.FORGE_CALLBACK_URL,
        accountSid:  process.env.TWILIO_ACCOUNT_SID,
        twilio_token:  process.env.TWILIO_AUTH_TOKEN
    },
    scopes: {
        // Required scopes for the server-side application
        internal: ['bucket:create', 'bucket:read', 'data:read', 'data:create', 'data:write', 'bucket:delete'],
        // Required scope for the client-side viewer
        public: ['viewables:read', 'bucket:delete']
    },

};
