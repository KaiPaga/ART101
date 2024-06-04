/**
 * Author: Kai Pagan
 * Created: June 2nd, 2024
 * License: Public Domain
 **/

const express = require('express');
const random = require('random');
const app = express();

// Define some categories of fortune cookies
const categories = ['general', 'love', 'career', 'health'];

// Fortune data for each category
const fortunes = {
    general: [
        "A friend’s frown is better than a fool’s smile.",
        "A good friendship is often more important than a passionate romance.",
        "A good time to finish up old tasks."
    ],
    love: [
        "A kiss makes the heart young again and wipes out the years.",
        "A lifetime of happiness lies ahead of you.",
        "Accept something that you cannot change, and you will feel better."
    ],
    career: [
        "A light heart carries you through all the hard times.",
        "A person of words and not deeds is like a garden full of weeds.",
        "A pleasant surprise is waiting for you."
    ],
    health: [
        "A quiet evening with friends is the best tonic for a long day.",
        "A single kind word will keep one warm for years.",
        "A smile is your passport into the hearts of others."
    ]
};

// Define a route to retrieve a random fortune cookie
app.get('/fortune', (req, res) => {
    const category = req.query.category || 'general'; // Default to 'general' category if no category is provided
    const fortuneList = fortunes[category];
    if (!fortuneList) {
        return res.status(400).json({ error: 'Invalid category' });
    }
    const randomIndex = random.int(0, fortuneList.length - 1);
    const fortune = fortuneList[randomIndex];
    res.json({ category, fortune });
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
