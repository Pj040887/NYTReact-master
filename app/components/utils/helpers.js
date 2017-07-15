var axios = require("axios");
var geocodeAPI = "35e5548c618555b1a43eb4759d26b260";
var helpers = {

  getArticles: function()
  {
    console.log("getting articles")
    return axios.get("/api/saved");
  },

  saveArticle: function(article)
  {
    return axios.post("/api/saved", article);
  },

  deleteArticle: function(articleID)
  {
    return axios.delete("/api/saved/"+ articleID)
  }

  
};
module.exports = helpers;
