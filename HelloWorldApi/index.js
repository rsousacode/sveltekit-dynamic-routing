const express = require('express');
const app = express();
const port = 3000;

app.get('/api/hello', (req, res) => {
    const greeting = {
        hello: 'world'
    };
    res.json(greeting);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
