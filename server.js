const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware pour parser le JSON
app.use(bodyParser.json());

app.post('/generateQuote', async (req, res) => {
    try {
        const response = await axios.post('https://api.openai.com/v1/engines/text-davinci-003/completions', {
            prompt: "Generate a motivational quote for developers.",
            temperature: 0.7,
            max_tokens: 60,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0
        }, {
            headers: {
                'Authorization': `Bearer YOUR_OPENAI_API_KEY`
            }
        });

        res.json({ quote: response.data.choices[0].text.trim() });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error generating quote');
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
