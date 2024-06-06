import express from 'express';

let articlesInfo = [{
    name: 'parashat-intro',
    upvotes: 0,
}, {
    name: 'stories-of-the-patriarchs',
    upvotes: 0,
}, {
    name: 'wisdom-of-the-prophets',
    upvotes: 0,
}]

const app = express();
app.use(express.json());

app.put('/api/articles/:name/upvote', (req, res) => {
    const { name } = req.params;
    const article = articlesInfo.find(a => a.name === name);

    if (article) {
        article.upvotes +=1;
        res.send(`The ${name} article now has ${article.upvotes} upvotes`);
    } else {
        res.send('That article doesn\'t exist!');
    }
})

app.listen(8000, () => {
    console.log('Server is running on http://localhost:8000');
}) 