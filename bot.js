console.log("bot is running");

var Twit = require('twit');

var config = require("./config");
var T = new Twit(config);


var hashtags = '#kubernetes, #k8s, #docker, #openstack, banana';

var filter_object = {
    track: hashtags,
    language: 'en, zh_tw'
}
//
//  stream a sample of public statuses
//
var stream = T.stream('statuses/filter', filter_object);
var i = 0;

stream.on('tweet', function(tweet) {

    i++;
    console.log(i + ". " + tweet.user.name + " (" + tweet.user.screen_name + "): " + tweet.text);

});

//
//  search twitter for all tweets containing the word 'banana' since July 11, 2011
//
// T.get('search/tweets', { q: 'kubernetes', count: 30 }, function(err, data, response) {

//     var tweets = data.statuses;
//     for (var i = 0; i < tweets.length; i++) {
//         console.log(i + ". " + tweets[i].user.name + " [" + tweets[i].user.screen_name + "](" + tweets[i].user.lang + "):\n" + tweets[i].text + "\n");
//     }

// });
// var following_list = [];

// T.get('friends/ids', getFriendIds);


// function getFriendIds(err, data, response) {

//     var ids = data.ids;
//     for (var i = 0; i < ids.length; i++) {
//         T.get('users/show', { user_id: ids[i] }, function(err, data, response) {
//             console.log(data.name);
//         });
//     }
//     //console.log(following_list);
// }