const express = require('express');
const mustacheExpress = require('mustache-express');
const githubUser = require('./githubUser.js');

const app = express();

app.engine('tpl', mustacheExpress());
app.set('view engine', 'tpl');
app.set('views', `${__dirname}/templates`);

app.get('/:user', (req, res) => {
  githubUser(req.params.user).then(user => {
    res.render('index', user.data);
  });
});

app.listen(3000);
console.log('Listening on port 3000.');
