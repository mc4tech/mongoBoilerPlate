const path = require('path');

module.exports = function (app) {

    app.get('/', function (req, res) {
        res.sendFile(path.join(__dirname, '../public/index.html'));
    });

    // If no matching route is found default to index.html
    app.get('*', function (req, res) {
        res.sendFile(path.join(__dirname, '../public/index.html'));
    });

};