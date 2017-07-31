
var Article = require("./../models/Article");


module.exports = function (app) {

    app.get('/api/save', (req, res) => {
        Article.find({}).then((doc) => {
            res.json(doc);
        })
    });

    app.post('/api/save', (req, res) => {

        Article.create({

            "title": "youhuihkjlr mon",
            "date": "jan",
            "url": "yourmom.com"

        }, () => {
            res.send("you successfully created something");
        });

    });

    app.delete('/api/save', (req, res) => {
        Article.remove({"title": req.body.title}).then((docs) => {
            res.json(doc);
        });
        
    });

    app.get("/", function(req, res) {
        res.sendFile(__dirname + "../public/index.html");
    });

};