const express = require('express');
const axios = require('axios');
const router = express.Router();

const GOOGLE_FONTS_API_KEY = process.env.GOOGLE_FONTS_API_KEY;

router.get('/fonts', async (req, res) => {
    try {
        const response = await axios.get(`https://www.googleapis.com/webfonts/v1/webfonts?key=${GOOGLE_FONTS_API_KEY}&capability=VF`);
        res.json(response.data.items);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch fonts' });
    }
});

module.exports = router;
