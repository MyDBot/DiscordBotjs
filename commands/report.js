const Discord = require("discord.js");
module.exports.run = async (bot, message , args)=>{
   let ruser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
     if(!ruser) return message.channel.send("Couldn`t Find User!");
     let reason = args.join().slice(22);
   
     let rEmbed = new Discord.RichEmbed()
     .setDescription("Report")
     .setColor("#00ff61")
     .addField("Reported User: " , `${ruser}`)
     .addField("Reason: " , `${reason}`)
     .addField("Status: ","sent!");
   
     return message.channel.send(rEmbed);
}

module.exports.help={
 name: "report" 
}
