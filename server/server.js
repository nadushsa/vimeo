const express = require('express');
const { Vimeo } = require('@vimeo/vimeo');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

const CLIENT_ID = process.env.VIMEO_CLIENT_ID;
const CLIENT_SECRET = process.env.VIMEO_CLIENT_SECRET;
const ACCESS_TOKEN = process.env.VIMEO_ACCESS_TOKEN;

const vimeoClient = new Vimeo(CLIENT_ID, CLIENT_SECRET, ACCESS_TOKEN);

// Use the CORS middleware
app.use(cors());

app.get('/api/account', (req, res) => {
    vimeoClient.request({
        method: 'GET',
        path: '/me'
    }, (error, body, status_code, headers) => {
        if (error) {
            res.status(status_code).json({ error });
        } else {
            res.json(body);
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
