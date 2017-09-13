var Twit = require('twit');
var config = require("./config");
var T = new Twit(config);


var hashtags = 'hermitcraft, #DecidedlyVanilla, hermitquest';

var filter_object = {
    track: hashtags,
    language: 'en, zh_tw'
}

var stream = T.stream('statuses/filter', filter_object);
var i = 0;

stream.on('tweet', function(tweet) {

    //console.log(tweet);

    if ((tweet.user.screen_name != 'alfrebello_c') &&
        !tweet.retweeted_status &&
        !tweet.quoted_status &&
        tweet.user.followers_count > 500 &&
        tweet.text.indexOf('I liked a @YouTube video') != -1) {

        i++;

        console.log(i + ". [Timestamp: " + tweet.created_at + "]\n" + tweet.user.name + " (" + tweet.user.screen_name + "): \n" + tweet.text + "\n");
        //console.log(tweet);
        T.post('statuses/retweet/:id', { id: tweet.id_str }, function(err, data, response) {
            if (err) throw err;
            //else console.log('retweeted');
        });

        T.post('favorites/create', { id: tweet.id_str }, function(err, data, response) {

            if (err) throw err;
            //else console.log('Faved');
        });
    }
});