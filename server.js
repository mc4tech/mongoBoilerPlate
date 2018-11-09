// Setup basic express server
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = process.env.PORT || 8080;

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());
app.use(express.static("public"));


mongoose.connect('mongodb://localhost/mydb', {
    useNewUrlParser: true
});


require('./routes/html-routes')(app);
require('./routes/api-routes')(app);


app.listen(port, () => {
    console.log('Server listening at port %d', port);
});