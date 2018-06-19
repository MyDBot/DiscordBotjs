const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});

bot.on("ready" , async () => {
  console.log(`${bot.user.username} is online!`);
  bot.user.setGame("on SourceCade!");
});

bot.on("message" , async message=>{
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);


  if(cmd === `${prefix}botinfo`){
    let bicon = bot.user.displayAvatarURL;

    let botembed = new Discord.RichEmbed()
    .setDescription("Bot Info")
    .setColor("#15f153")
    .setThumbnail(bicon)
    .addField("Bot Name: " , bot.user.username)
    .addField("Created On: " , bot.user.createdAt);

    return message.channel.send(botembed);
  }



  if(cmd === `${prefix}serverinfo`){
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



  if(cmd === `${prefix}report`){
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
  else{
    return message.channel.send("Sorry Unknown CMD!");
  }
});
bot.login(botconfig.token);
