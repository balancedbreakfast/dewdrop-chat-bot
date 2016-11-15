module.exports = function(controller, bot){
    controller.hears(['hey walle'], 'ambient', function(bot, message){
        bot.api.reactions.add({
            timestamp: message.ts,
            channel: message.channel,
            name: 'kissing_cat',
        }, function(err, res) {
            if (err) {
                bot.botkit.log('Failed to add emoji reaction :(', err);
            }
        });
        bot.reply(message, 'maoooooo');
    });
};