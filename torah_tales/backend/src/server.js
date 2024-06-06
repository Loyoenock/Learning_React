import express from 'express';

const app = express();

app.get('/hello', (req, res) => {
    res.send('Hello world!');
})

app.listen(8000, () => {
    console.log('Server is running on http://localhost:8000');
}) 