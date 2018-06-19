
    let bicon = bot.user.displayAvatarURL;

    let botembed = new Discord.RichEmbed()
    .setDescription("Bot Info")
    .setColor("#15f153")
    .setThumbnail(bicon)
    .addField("Bot Name: " , bot.user.username)
    .addField("Created On: " , bot.user.createdAt);

    return message.channel.send(botembed);
 
