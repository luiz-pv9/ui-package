const express = require('express');
let app = express();

app.set('views', __dirname);
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/..'));

app.get('/', (req, res) => {
  res.render('index');
});

app.listen(8080, function() {
  console.log("Documentation server listening on port [8080]");
});
