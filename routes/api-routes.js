var Article = require("../models/Article.js");
var Secrets = require("../configs/secrets.js");

module.exports = function(app, db) 
{
app.get("/api/saved", function(req, res)
    {
        Article.find({}, function(err, doc)
        {
            if(err)
            {
            console.log(err);
            res.status(500).send(err);
            }
            else
            {
            res.json(doc);
            }
        });
    });


    app.post("/api/saved", function(req, res)
    {
        console.log("request body: "+ JSON.stringify(req.body));
        var newArticle = new Article(req.body);
        console.log("new Article: " + JSON.stringify(newArticle, null, 2));
        Article.create(newArticle, function(err, doc)
        {
            if(err)
            {
            console.log(err);
            res.status(500).send(err);
            }
            else
            {
            console.log("returned doc = " + doc);
            res.json(doc);
            }
        })
    };
    app.delete("/api/saved", function(req, res)
    {
        Article.remove({"_id": req.body._id}, function(err, data)
        {
            if (err) 
            {
            res.status(500);
            console.log(err);
            }
            else
            {
            res.json(data);
            }
        });
    })

    app.get("/api/search", function(req, res)
    {
        request.get({
        url: "https://api.nytimes.com/svc/search/v2/articlesearch.json",
        qs: {
            'api-key': Secrets.nyt_key,
            'q': "trump",
            'begin_date': "20170101",
            'end_date': "20170509"
        },
        }, function(err, response, body) {
        body = JSON.parse(body);
        console.log(body);
        })
    })
};
