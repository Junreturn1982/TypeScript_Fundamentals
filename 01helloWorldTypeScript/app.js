const express = require('express');

const app = express();

const port = process.env.PORT || 3000;

app.listen(port, () => console.log('running server on port ' + port));

app.use(express.static('./Scripts'));
app.use(express.static('./views'));

app.set('views', './src/views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.send('Hello Hoang');
});