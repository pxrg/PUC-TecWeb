var config = require('./config');
var Twitter = require('twitter');

function twitter_client(){
  return new Twitter({
    consumer_key: config.twitter.consumer_key,
    consumer_secret: config.twitter.consumer_secret,
    access_token_key: config.twitter.access_token_key,
    // access_token_secret: config.twitter.access_token_secret
  });
}

function carregar_tweets(query, callback, client){
  twitter_get('search/tweets', query,callback, client);
}


function twitter_get(path, query, callback, client){
  if (client == undefined) { client = get_client(); };
  client.get(path, query, function(error, data, response){
     callback(data, response);
  });
}

function test_callback(tweets, response){
  console.log(Object.keys(tweets));
  console.log(tweets.statuses.length);
  for (var i = 0; i < tweets.statuses.length; i++) {
   console.log(tweets.statuses[i].text);
  };
  console.log(tweets.statuses[0]);
}

function tw_screen_name(link){
  var us = link;
  return us.replace('http://twitter.com/', '').replace('/', '');
}

// var query = '#dilma :(';
// carregar_tweets({q: query}, test_callback);

module.exports = {
  twitter_get : twitter_get,
  carregar_tweets: carregar_tweets,
  twitter_client: twitter_client,
  tw_screen_name: tw_screen_name
}
