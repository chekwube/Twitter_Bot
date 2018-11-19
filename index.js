require('dotenv').config();
//var conf = require('bash_profile');
var Twit = require('twit');

var bot = new Twit({
    consumer_key: process.env.LEARNINGBOT_CONSUMER_KEY,
    consumer_secret: process.env.LEARNINGBOT_CONSUMER_SECRET,
    access_token: process.env.LEARNINGBOT_ACCESS_TOKEN,
    access_token_secret: process.env.LEARNINGBOT_ACCESS_TOKEN_SECRET,
    timeout_ms: 60*1000
});

//tweet status
bot.post('statuses/update', {status: 'hello world!'},
    function(err, data, response){
        if(err){
            console.log(err);
        }else{
            console.log(data.text + ' was tweeted.')
        }
    }
);

//fetch followers (use 'followers/ids' to fetch followers id number)
bot.get('followers/list', {screen_name: 'spying cheks'}, function(err, data, response){
    if(err){
        console.log('Spying mode dlling');
    }else{
        // data.users.forEach(function(user){
        //     console.log(user.screen_name);
        // });
        console.log(data);
    }
});

//follow someone
bot.post('friendships/create', {screen_name: 'mine'}, function(err, data, response){
    if(err){
        console.log(err);
    }else{
        console.log(data);
    }
});

//view who is following you
bot.get('friends/ids', {screen_name: 'chekwube okeke'}, function(err, data, response){
    if(err){
        console.log(err);
    }else{
        console.log(data);
    }
});

//who you follow that follows you
bot.get('friendships/lookup', {screen_name: 'chekwube okeke'}, function(err, data, response){
    if(err){
        console.log(err);
    }else{
        console.log(data);
    }
});

//directly message someone we follow
bot.post('direct_messages/new', {screen_name: '', text: 'heloo!'}, function(err, data, response){
    if(err){
        console.log(err);
    }else{
        console.log(data);
    }
});

//to see tweets of poeple we are following
function getBotTimeline(){
bot.get('statuses/home_timeline', {count:5}, function(err, data, response){
    if(err){
        console.log(err);
    }else{
        data.forEach(function(d){
            console.log(d.text);
            console.log(d.user.screen_name);
            console.log(d).id_st;
            console.log('\n');
        });
        console.log(data);
    }
});
}

getBotTimeline();

//re-tweet (use 'statuses/unretweet/:id') to remove a tweet
bot.post('statuses/retweet/:id', {id:'239456796'}, function(err, data, response){
    if(err){
        console.log(err);
    }else{
        console.log(data.text+' was retweeted.');
    }
});

//to like a tweet (use 'favorites/destroy' to unldelete)
bot.post('favorites/create', {id: 'the tweet details'}, function(err, data, response){
    if(err){
        console.log(err);
    }else{
        console.log(data.text+' was liked')
    }
});

//to reply a tweet
bot.post('status/update', {status:'@screen_name_of_who_tweeted.my reply!', in_reply_to_status_id: '1234567654'}, 
    function(err, data, response){
        if(err){
            console.log(err);
        }else{
            console.log(data);
        }
    }
);