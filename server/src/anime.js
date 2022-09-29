const router = require('express').Router();
const axios = require('axios').default;

router.post(`/:name`, async (req, res) => {
    const { limit, page } = req.body;
    const search = req.params.name;
    const { data } = await axios.get(`https://api.jikan.moe/v4/anime?q=${search}&limit=${limit}&page=${page}`);
    for (let i = 0; i < data.data.length; i++) {
        if (data.data[i].score <= 4) {
            data.data[i].isGood = 'I do not recommend it.'
            data.data[i].colorScore = '#c53030';
        } else if (data.data[i].score > 4 && data.data[i].score <= 7) {
            data.data[i].isGood = 'You may have fun.'
            data.data[i].colorScore = '#f1d537';
        } else if (data.data[i].score > 7) {
            data.data[i].isGood = 'Great, this is one of the best animes.'
            data.data[i].colorScore = '#0adb15';
        }
    }
    try {
        res.json(data)
    } catch (err) {
        res.status(500).json({
            error: `A problem has occurred with the server: ${err}.`,
            status: 500
        })
    }
});

module.exports = router;