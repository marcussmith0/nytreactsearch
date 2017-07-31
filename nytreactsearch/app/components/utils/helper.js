import axios from 'axios';
const API_KEY = "96fef3bfa35a493cb4808e5c32449384";

var getArticles = function(topic, startYear, endYear) {
     return axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${API_KEY}&q=${topic}&begin_date=${startYear}0101&end_date=${endYear}1231`).then((data) => {

        if(data.data.response.docs) {
            var articles = data.data.response.docs.splice(0, 5);
            return articles;   
        }

        return "";

            
        //    return console.log(data.data.response.docs[0].headline.sub);
        //     console.log(data.data.response.docs[0].pub_date);
        //     console.log(data.data.response.docs[0].web_url);
        });

}


module.exports = {getArticles};