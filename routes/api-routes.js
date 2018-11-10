// Require all models
const db = require('../models');

module.exports = function (app) {
    app.get('/api/example', function (req, res) {
        db.Example.find({})
            .then(function (db) {
                res.json(db);
            })
            .catch(function (err) {
                res.json(err);
            });
    });

    app.post('/api/example', function (req, res) {
        db.Example.create(req.body)
            .then(function (db) {
                res.json(db);
            })
            .catch(function (err) {
                res.json(err);
            });
    });

    app.put('/api/example', function (req, res) {
        db.Example.findOneAndUpdate({
                todo: req.body.todo
            }, {
                $set: {
                    completed: req.body.completed
                }
            })
            .then(function (db) {
                res.json(db);
            })
            .catch(function (err) {
                res.json(err);
            });
    });


}