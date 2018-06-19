


 const Discord = require("discord.js");
module.exports.run = async (bot, message , args)=>{
   
let sicon = message.guild.iconURL;
    let serverembed = new Discord.RichEmbed()
    .setDescription("Server Info")
    .setColor("#00ffff")
    .setThumbnail(sicon)
    .addField("ServerName: " , message.guild.name)
    .addField("Created On: " , message.guild.createdAt)
    .addField("You Joind On: " , message.member.joinedAt)
    .addField("Total Membders: " , message.guild.memberCount);

    return message.channel.send(serverembed);
}

module.exports.help={
 name: "serverinfo" 
}
