const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '!'
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});


client.on('ready', () => {
  console.log('?[??????????????????????????????????]?');
  console.log('')
  console.log('            ?[????????????]?')
  console.log('              Bot Is Online')
  console.log('            ?[????????????]?')
  console.log('')
  console.log(`Logged in as ${client.user.tag}!`);
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log('')
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log('')
  console.log('?[????????????????????????????????????]?')
});


client.on("ready", async  => {
setInterval(function(){
client.channels.find('id', '423934297376817172').setName("༺");  
client.channels.find('id', '423934297376817172').setName("༺W");
client.channels.find('id', '423934297376817172').setName("༺We");
client.channels.find('id', '423934297376817172').setName("༺Wel");
client.channels.find('id', '423934297376817172').setName("༺Welc");
client.channels.find('id', '423934297376817172').setName("༺Welco");
client.channels.find('id', '423934297376817172').setName("༺Welcom");
client.channels.find('id', '423934297376817172').setName("༺Welcome");  
client.channels.find('id', '423934297376817172').setName("༺Welcome T");
client.channels.find('id', '423934297376817172').setName("༺Welcome To");
client.channels.find('id', '423934297376817172').setName("༺Welcome To F");
client.channels.find('id', '423934297376817172').setName("༺Welcome To FI");
client.channels.find('id', '423934297376817172').setName("༺Welcome To FIN");
client.channels.find('id', '423934297376817172').setName("༺Welcome To FINE");
client.channels.find('id', '423934297376817172').setName("༺Welcome To FINEX");
client.channels.find('id', '423934297376817172').setName("༺Welcome To FINEX༻");
client.channels.find('id', '423934297376817172').setName("༺Welcome To FINEX༻🌹");
client.channels.find('id', '423934297376817172').setName("༺Welcome To FINEX༻🌹");
client.channels.find('id', '423934297376817172').setName("༺Welcome To FINEX༻🌹");  
  }, 3000);
});




console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
console.log('         [Wait please .. ]       ')
console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
client.on('ready', () => {
    console.log('')
    console.log('')
    console.log('')
    console.log('')
    console.log('')
    console.log('')
    console.log('')
    console.log('')
  console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
  console.log(`Logged in as [ ${client.user.tag}! ]`);
  console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
  console.log('[           BOT IS ONLINE         ]')
  console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
  console.log('[        info         ]')
  console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
});
 
client.on("message", message => {
 
  function discoRole() {
    let random = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
    roles.forEach((role) => {
      let theRole = message.guild.roles.find("name", role);
      theRole.edit({color: random}).catch(e => {
        return message.channel.send(":x: **Error:** The role you specified in the `config.json` is either not a role on this server, or his a role higher than the highest role that I have.");
      });
    });
  }
 
  if(message.content.startsWith(prefix + "startdisco")) {
    if(allowedUsers.includes(message.author.id)) {
    setInterval(() => { discoRole(); }, config.ms);
    message.channel.send("```css\nDiscoing...```");
    message.channel.send("Please make sure you read the README, you could get IP banned from discord because of ratelimits.");
  } else {
    message.reply(`You do not have permission to disco. If you have downloaded this bot off of github please go to the config.json and add your user ID to the "allowedUsers" value.`);
  }
} else
 
if(message.content.startsWith(prefix + "stopdisco")) {
  if(allowedUsers.includes(message.author.id)) {
  message.channel.send("I've stopped discoing.");
  setTimeout(() => { console.log(process.exit(0)); }, 300);
} else {
  message.reply(`You do not have permission to disco. If you have downloaded this bot off of github please go to the config.json and add your user ID to the "allowedUsers" value.`);
  }
}
 
});
const config = require('./config.json');

 
const allowedUsers = config.allowedUsers;
const roles = config.roleToDisco;
 
client.on("ready", () => {
    client.user.setPresence({ game: { name: `RAINBOW (= FX` }, type: 0 });
    console.log("RAINBOW (= FX");
});





var ss = 0;

client.on('voiceStateUpdate', (o,n) => {
    if (o.voiceChannel && !n.voiceChannel) {
        ss-=1
        n.guild.channels.get("423857340173910020").edit({
            name : "FINEX VOICE : " + ss+ ""
        })
    };
    if (n.voiceChannel && !o.voiceChannel) {
        ss+=1
        n.guild.channels.get("423857340173910020").edit({
            name : "FINEX VOICE : " + ss+ ""
        })
    }
})
client.on("ready", () => {
    client.guilds.get("423857340173910017").members.forEach(m => {
        if (m.voiceChannel) {
            ss+=1
        };
        client.channels.get("423857340173910020").edit({
            name : "FINEX VOICE : " + ss+ ""
        })
    });
});
 


client.on('ready', function(){
    var ms = 10000 ;
    var setGame = [' WELCOME ','FINEX SERVER | FX ','BY : بايثور ','HAY [=',' Hi (='];
    var i = -1;
    var j = 0;
    setInterval(function (){
        if( i == -1 ){
            j = 1;
        }
        if( i == (setGame.length)-1 ){
            j = -1;
        }
        i = i+j;
        client.user.setGame(setGame[i],`https://www.twitch.tv/pythorxxx`);
    }, ms);

})



client.login(process.env.BOT_TOKEN);
