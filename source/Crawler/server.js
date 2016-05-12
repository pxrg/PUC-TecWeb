var config = require('./config');
var Twitter = require('twitter');

var client = new Twitter({
  consumer_key: config.twitter.consumer_key,
  consumer_secret: config.twitter.consumer_secret,
  access_token_key: config.twitter.access_token_key,
  // access_token_secret: config.twitter.access_token_secret
});

client.get('search/tweets', {q: '#dilma :('}, function(error, tweets, response){
    // return statuses and search_metadata
   console.log(Object.keys(tweets));
   console.log(tweets.statuses.length);
   for (var i = 0; i < tweets.statuses.length; i++) {
       console.log(tweets.statuses[i].text);
   };
   // console.log(tweets.statuses[0]);
});
