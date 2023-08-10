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

router.get('/getFontPairs', async (req, res) => {
    try {
        const response = await axios.get(`https://www.googleapis.com/webfonts/v1/webfonts?key=${GOOGLE_FONTS_API_KEY}&capability=VF`);
        const fonts = response.data.items;

        const serifFonts = fonts.filter(font => font.category === 'serif');
        const sansSerifFonts = fonts.filter(font => font.category === 'sans-serif');

        const getRandomFonts = (fontList, num) => {
            const selected = [];
            while (selected.length < num) {
                const randomFont = fontList[Math.floor(Math.random() * fontList.length)];
                if (!selected.includes(randomFont)) {
                    selected.push(randomFont);
                }
            }
            return selected;
        };

        const selectedSerifFonts = getRandomFonts(serifFonts, 5);
        const selectedSansSerifFonts = getRandomFonts(sansSerifFonts, 5);

        const pairs = selectedSerifFonts.map((serifFont, index) => ({
            pair_id: index,
            font1: serifFont.family,
            font2: selectedSansSerifFonts[index].family
        }));

        res.json(pairs);

    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch font pairs' });
    }
});

module.exports = router;
