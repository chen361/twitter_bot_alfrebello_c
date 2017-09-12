var Twit = require('twit');
var config = require("./config");
var T = new Twit(config);


var hashtags = '#kubernetes, #k8s, #docker, #openstack, banana';

var filter_object = {
    track: hashtags,
    language: 'en, zh_tw'
}

var stream = T.stream('statuses/filter', filter_object);
var i = 0;

stream.on('tweet', function(tweet) {

    i++;
    console.log(i + ". [Timestamp: " + tweet.created_at + "]\n" + tweet.user.name + " (" + tweet.user.screen_name + "): \n" + tweet.text + "\n");

});