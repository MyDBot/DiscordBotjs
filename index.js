const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});
const fs = require("fs");
bot.commands = new Discord.Collection();


fs.readdir("./commands/", (err, files) => {

  if(err) console.log(err);

  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
    console.log("Couldn't find commands.");
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./commands/${f}`);
    console.log(`${f} loaded!`);
    bot.commands.set(props.help.name, props);
  });

});


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
  
  
  let commandfile = bot.commands.get(cmd.slice(prefix.length));
  if(commandfile)commandfile.run(bot,message,args);


  



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




  



});
bot.login(botconfig.token);

setInterval(function() {
    console.log("Awake!");
}, 10000);


