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


  if(cmd === `${prefix}kick`){
    let kuser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

    if(!kuser){message.channel.send("Cant Find user!");return;)

    let kreason = args.join(" ").slice(22);

    letkickEmbed = Discord.RichEmbed()
    .setDescription("~ Kick ~")
    .setColor("#e56b00")
    .addField("Kicked User:" , `${kuser} with ID ${kuser.id}`)
    .addField("Kicked BY:" , `<@${message.author.id}> with ID ${message.author.id}`)
    .addField("Kicked in:" , message.channel)
    .addField("Time:" , message.createdAt)
    .addField("Reason:" , kreason);
    return message.channel.send(letkickEmbed);

  }
});
bot.login(botconfig.token);

  
  
  
var express = require("express");
var app= express();
var port = process.env.PORT || 80;

app.get("/" ,function(req , res){
	res.send("welcome to F MyD Demo!");
});

app.get('/tst' , (req, res) => res.send("tst Page"))


app.listen(port);
  
var http = require("http");
setInterval(function() {
    http.get("http://<your app name>.herokuapp.com");
}, 300000);
