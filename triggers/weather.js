module.exports = function(controller, bot){
    controller.hears("(.*?)weather(.*?)(today|tomorrow|this week|next week)", 'ambient', function(bot, message){
        console.log('matched message 0', message.match[0]);
        console.log('matched message 1', message.match[1]);
        console.log('matched message 2', message.match[2]);
        console.log('matched message 3', message.match[3]);
        var day = message.match[3];
        bot.reply(message, day);
    });
};