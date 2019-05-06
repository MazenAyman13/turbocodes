const Discord = require('discord.js');
const ytdl = require('ytdl-core');
const { Client, Util } = require('discord.js');  
const getYoutubeID = require('get-youtube-id'); 
const fetchVideoInfo = require('youtube-info');
const YouTube = require('simple-youtube-api');
const yt_api_key = "AIzaSyDeoIH0u1e72AtfpwSKKOSy3IPp2UHzqi4";
const request = require('request');
const queue = new Map(); 
const client = new Discord.Client(); 
const db = require('quick.db');
const giphy = require('giphy-api')();    
const googl = require('goo.gl'); 
const translate = require('google-translate-api');   
const fs = require("fs"); 
var data = JSON.parse(fs.readFileSync('data.json','utf8'))
const moment = require("moment");
const UserBlocked = new Set(); 
const jimp = require('jimp');   
const math = require('math-expression-evaluator'); 
const stripIndents = require('common-tags').stripIndents;
const figlet = require('figlet');
const google = require('google-it'); 
const zalgo = require('zalgolize');   
const sql = require("sqlite");
 const dateFormat = require('dateformat'); 
 const pretty = require('pretty-ms') 
,ti={}  
,spee={};
 const prefix = "#";

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
client.user.setGame(`#help-js | #help2 | #تقديم `,"http://twitch.tv/S-F")
client.user.setStatus("dnd")
 
});
let vipKeys = 
JSON.parse(fs.readFileSync("./vipKeys.json", "utf8"));
client.on("message", msg=>{
let id = "476088952726749188"; // ايديك
let role = "VIP"; // اسم رتبة الفيب
let Price = 10000k; // السعر
let Price2 = Math.floor(Price-(Price*(1/100)));
if(!Price || Price < 1) return;
let cmd = msg.content.split(' ')[0];
if(cmd === `#buy`){
if(msg.author.bot) return;
if(!msg.channel.guild) return;
let embedvip = new Discord.RichEmbed()
.setColor("#42f4f4")
.setAuthor(msg.author.username, msg.author.displayAvatarURL)
.setThumbnail(msg.author.avatarURL)
.setTitle("**اختر الطريقة المناسبة لك**")
.addField("ل شراء الفي اي بي لنفسك","🔱",true )
.addField("ل شراء الفي اي بي ك هدية","🎁",true)
.setTimestamp()
.setFooter(client.user.username,client.user.displayAvatarURL);
msg.channel.send(embedvip).then(msgs2 =>{
msgs2.react("🔱").then(()=>{
  msgs2.react("🎁").then(()=>{
    const me = (reaction, user) => reaction.emoji.name === '🔱' && user.id === msg.author.id;
    const gift = (reaction, user) => reaction.emoji.name === '🎁' && user.id === msg.author.id;
    const mec = msgs2.createReactionCollector(me, {time: 120000});
    const giftc = msgs2.createReactionCollector(gift, {time: 120000});
mec.on("collect", r=>{  
msgs2.delete()
if(msg.member.roles.find(r=>r.name == role)) return msg.reply("انت تمتلك الرتبة مسبقًا");
let roleW = msg.guild.roles.find(r=>r.name == role);
if(!roleW) return msg.reply(`البوت مقفل لعدم وجود رتبة ب أسم \`${role}\``)
msg.channel.send(`كردت بروبوت\`${Price}\` لديك 4 دقائق لتحويل
إلى ${msg.guild.members.get(id)}
`).then( msgs =>{
const filter = response => response.author.id == "282859044593598464" && response.mentions._content.includes(`:moneybag: | ${msg.author.username}, has transferred \`$${Price2}\` to ${msg.guild.members.get(id)}`);
msg.channel.awaitMessages(filter, { maxMatches: 1, time: 240000, errors: ['time'] })
.then( collected =>{
msgs.delete()
msg.reply(`تم اعطائك رتبة \`${role}\``);
msg.member.addRole(roleW);
}).catch(e => {});
})})
giftc.on("collect", r=>{
  msgs2.delete()
  let roleW = msg.guild.roles.find(r=>r.name == role);
  if(!roleW) return msg.reply(`البوت مقفل لعدم وجود رتبة ب أسم \`${role}\``)
msg.channel.send(`كردت بروبوت\`${Price}\` لديك 4 دقائق لتحويل
إلى ${msg.guild.members.get(id)}
`).then( msgs =>{
  const filter = response => response.author.id == "282859044593598464" && response.mentions._content.includes(`:moneybag: | ${msg.author.username}, has transferred \`$${Price2}\` to ${msg.guild.members.get(id)}`);
  msg.channel.awaitMessages(filter, { maxMatches: 1, time: 240000, errors: ['time'] })
  .then( collected =>{
  msgs.delete()
  genKey(msg,roleW);
  }).catch(e => {});
  })
})
})})})
///
}
if(cmd === `${prefix}used`){
  let args = msg.content.split(" ").slice(1)[0];
  if(!args) {   
    let embed = new Discord.RichEmbed()
    .setColor("#42f4f4")
    .setTitle(`:x: - **الرجاء ادخال كود الهدية** \`${prefix}used <Key>\``)
    msg.reply(embed).then( z => z.delete(3000));
    return
}
  let embed = new Discord.RichEmbed()
.setTitle(`**جاري التحقق من الكود**`)
.setColor("#42f4f4")
  msg.reply(embed).then( msgs =>{
  if(vipKeys[args]){
    let hav = msg.member.roles.find(`name`, vipKeys[args].name);
    if(hav){
    let embed = new Discord.RichEmbed()
    .setTitle(`:x: - **انت تمتلك هذه الرتبة مسبقًا**  \`${vipKeys[args].name}\``)
    .setColor("#42f4f4")
    msgs.edit(embed)
    return
    }
    let embed = new Discord.RichEmbed()
    .setTitle(`:tada: - **مبروك تم اعطائك رتبة** \`${vipKeys[args].name}\``)
    .setColor("#42f4f4")
    msgs.edit(embed)
    msg.member.addRole(vipKeys[args]);
    delete vipKeys[args]
    save()
  }else{
    let embed = new Discord.RichEmbed()
    .setTitle(`:x: - **الكود غير صيحيح أو انه مستعمل من قبل**`)
    .setColor("#42f4f4")
    msgs.edit(embed)
  }});
}
});

function genKey(msg,role){
  var randomkeys = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var gift = "";
  for (var y = 0; y < 16; y++) {   ///16
    gift +=  `${randomkeys.charAt(Math.floor(Math.random() * randomkeys.length))}`;
  }
  vipKeys[gift] = role;
  let embed = new Discord.RichEmbed()
  .setColor("#42f4f4")
  .setTitle(`:ok_hand: - **تم ارسآل الكود على الخاص**`);
  msg.reply(embed);
  let embed2= new Discord.RichEmbed()
  .setAuthor(msg.author.username, msg.author.displayAvatarURL)
  .setThumbnail(msg.author.avatarURL)
  .addField("**Key Of Gift**", gift,true)
  .addField("Role",vipKeys[gift].name,true)
  .addField("This Key Made by", msg.author, true)
  .addField("The Room", msg.channel , true)
  .setTimestamp()
  .setFooter(client.user.username,client.user.displayAvatarURL)  
  msg.author.send(embed2);
  save()
}

function save(){
  fs.writeFile("./vipKeys.json", JSON.stringify(vipKeys), (err) => {
    if (err) console.log(err)
  });

}

client.on('message', message => {
  if (true) {
if (message.content === '#invite') {
      message.author.send('  https://discordapp.com/api/oauth2/authorize?client_id=568536417731477549&permissions=8&scope=bot  |  تفضل ربط البوت     ').catch(e => console.log(e.stack));
 
    }
   }
  });
 
 
client.on('message', message => {
     if (message.content === "#invite") {
     let embed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("#9B59B6")
  .addField(" Done | تــــم" , " |  تــــم ارســالك في الخــاص")
     
     
     
  message.channel.sendEmbed(embed);
    }
});

client.on('message', message => {
    if (message.author.bot) return;
     if (message.content  === prefix + "help-js") {
          const embed = new Discord.RichEmbed()
 
 
   .setColor('RANDOM')
  .setTimestamp()
 
  .addField("⦁`All types of codes in Turbo Codes Server 💬`⦁",' ‎ ')
  .addField("❧  **#help-js-source    ➺      ⦁ قسم السورس الأساسي** ⦁",' ‎ ')
   .addField("❧  **#help-js-admin     ➺      ⦁ قسم الأكواد الإدارية** ⦁",' ‎ ')
     .addField("❧  **#help-js-general   ➺      ⦁ قسم الأكواد العامة*** ⦁",' ‎ ')
       .addField("❧  **#help-js-welcome   ➺      ⦁ قسم أكواد الترحيب** ⦁",' ‎ ')
           .addField("❧  **#help-js-help      ➺      ⦁ قسم أكواد الهلب** ⦁",' ‎ ')
            .addField("❧  **#help-js-bc        ➺      ⦁ قسم أكواد البرودكاست** ⦁",' ‎ ')
                 .addField("❧  **#help-js-games        ➺      ⦁ قسم اكواد الالعاب** ⦁",' ‎ ')
 .setFooter('Turbo Codes')
 
 
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
 
  client.on("message", message => {
 
            if (message.content.startsWith(prefix + "bc4")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' ');
  message.guild.members.filter(m => m.presence.status !== 'all').forEach(m => {
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'all').size}\` : عدد الاعضاء المستلمين`);
 message.delete();
};    
});
 
 
    client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-js-source-2") {
         message.channel.send('**لقد تم ارسال الكود في الخاص :ok_hand: **');
           
   
         
 
 
 message.author.sendMessage(`
 
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
     
     
 .setFooter('Turbo Codes')
 
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
 
     
           
 .setFooter('Turbo Codes')
 
 
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
           
 .setFooter('Turbo Codes')
 
 
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
           
 .setFooter('Turbo Codes')
 
 
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

client.on('message',async message => {
 
  if(message.content.startsWith(prefix + "js")) {
 
if(!message.channel.guild) return message.reply(' ');
 
  let rank = message.guild.member(message.author).roles.find('name', 'Support', 'Support Plus');
 
  if (!rank) return message.channel.send('🛑 **| يجب ان تمتلك رتبة سبورت لأستخدام هذا الأمر.**');
 
  let jscodes = message.guild.channels.find(`name`, "discord-js");
 
  if(!jscodes) return message.channel.send("❌لم اجد الروم الخاص بنشر الاكواد");
 
    let filter = m => m.author.id === message.author.id;
 
    let thisMessage;
 
    let thisFalse;
 
    message.channel.send('📝 **| من فضلك اكتب الكود الأن... ✏ **').then(msg => {
 
 
 
    message.channel.awaitMessages(filter, {
 
      max: 1,
 
      time: 90000,
 
      errors: ['time']
 
    })
 
    .then(collected => {
 
      collected.first().delete();
 
      thisMessage = collected.first().content;
 
      let boi;
 
      msg.edit('📜 **| من فضلك اكتب وصف الكود الأن... ✏ **').then(msg => {
 
 
 
          message.channel.awaitMessages(filter, {
 
            max: 1,
 
            time: 90000,
 
            errors: ['time']
 
          })
 
          .then(collected => {
 
            collected.first().delete();
 
            boi = collected.first().content;
 
            let boi2;
 
            msg.edit('🤵 **| من فضلك اكتب من صنع هذا الكود الأن... ✏ **').then(msg => {
 
 
 
              message.channel.awaitMessages(filter, {
 
                max: 1,
 
                time: 90000,
 
                errors: ['time']
 
              })
 
              .then(collected => {
 
                collected.first().delete();
 
              boi2 = collected.first().content;
 
      msg.edit('🛡 **| [ هل انت متأكد من نشر الكود؟ | [ نعم ] او [ لا**');
 
 message.channel.awaitMessages(response => response.content === 'نعم' || 'لا' && filter,{
 
        max: 1,
 
        time: 90000,
 
        errors: ['time']
 
      })
 
      .then(collected => {
 
        if(collected.first().content === 'لا') {
 
          msg.delete();
 
          message.delete();
 
          thisFalse = false;
 
        }
 
        if(collected.first().content === 'نعم') {
 
          if(thisFalse === false) return;
 
          msg.edit('🕊 **| Done ✅, تم بنجاح نشر كودك في روم الاكواد**');
 
          collected.first().delete();
 
          jscodes.send(`@everyone | @here
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
**Turbo Codes© ⬇**
\`\`\`css
${thisMessage}\`\`\`
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
**وصف الكود**: ${boi}
**تم النشر بواسطة**: ${message.author}
**المصدر / الشخص الذي صنع الكود**: ${boi2}`);
 
        }
 
      }
 
  );
 
});
 
    });
 
  }
 
    );
 
  });
 
}
 
);
 
    })}});
 
client.on('message',async message => {
 
  if(message.content.startsWith(prefix + "html")) {
 
if(!message.channel.guild) return message.reply(' ');
 
  let rank = message.guild.member(message.author).roles.find('name', 'Support', 'Support Plus');
 
  if (!rank) return message.channel.send('🛑 **| يجب ان تمتلك رتبة سبورت لأستخدام هذا الأمر.**');
 
  let jscodes = message.guild.channels.find(`name`, "discord-html");
 
  if(!jscodes) return message.channel.send("❌لم اجد الروم الخاص بنشر الاكواد");
 
    let filter = m => m.author.id === message.author.id;
 
    let thisMessage;
 
    let thisFalse;
 
    message.channel.send('📝 **| من فضلك اكتب الكود الأن... ✏ **').then(msg => {
 
 
 
    message.channel.awaitMessages(filter, {
 
      max: 1,
 
      time: 90000,
 
      errors: ['time']
 
    })
 
    .then(collected => {
 
      collected.first().delete();
 
      thisMessage = collected.first().content;
 
      let boi;
 
      msg.edit('📜 **| من فضلك اكتب وصف الكود الأن... ✏ **').then(msg => {
 
 
 
          message.channel.awaitMessages(filter, {
 
            max: 1,
 
            time: 90000,
 
            errors: ['time']
 
          })
 
          .then(collected => {
 
            collected.first().delete();
 
            boi = collected.first().content;
 
            let boi2;
 
            msg.edit('🤵 **| من فضلك اكتب من صنع هذا الكود الأن... ✏ **').then(msg => {
 
 
 
              message.channel.awaitMessages(filter, {
 
                max: 1,
 
                time: 90000,
 
                errors: ['time']
 
              })
 
              .then(collected => {
 
                collected.first().delete();
 
              boi2 = collected.first().content;
 
      msg.edit('🛡 **| [ هل انت متأكد من نشر الكود؟ | [ نعم ] او [ لا**');
 
 message.channel.awaitMessages(response => response.content === 'نعم' || 'لا' && filter,{
 
        max: 1,
 
        time: 90000,
 
        errors: ['time']
 
      })
 
      .then(collected => {
 
        if(collected.first().content === 'لا') {
 
          msg.delete();
 
          message.delete();
 
          thisFalse = false;
 
        }
 
        if(collected.first().content === 'نعم') {
 
          if(thisFalse === false) return;
 
          msg.edit('🕊 **| Done ✅, تم بنجاح نشر كودك في روم الاكواد**');
 
          collected.first().delete();
 
          jscodes.send(`@everyone | @here
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
**Turbo Codes© ⬇**
\`\`\`css
${thisMessage}\`\`\`
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
**وصف الكود**: ${boi}
**تم النشر بواسطة**: ${message.author}
**المصدر / الشخص الذي صنع الكود**: ${boi2}`);
 
        }
 
      }
 
  );
 
});
 
    });
 
  }
 
    );
 
  });
 
}
 
);
 
    })}});
 

 client.on("message", message => {
            if(message.content.startsWith("#تقديم")) {
        if(!message.channel.guild) return;
                if(message.author.bot) return;
        let channel = message.guild.channels.find("name", "تقديمات")///n3k4a is one  
            if(!channel) return message.reply("**لا يوجد روم للتقديمات**")
            if(channel) {
            message.channel.send( message.member + ', **:timer:**').then( (m) =>{
              m.edit( message.member + ', **اسمك الحقيقى بالكامل ✍**' )///n3k4a is one  
              m.channel.awaitMessages( m1 => m1.author == message.author,{ maxMatches: 1, time: 60*1000 } ).then ( (m1) => {
                  m1 = m1.first();
                  var name = m1.content;
                  m1.delete();
                  m.edit(message.member + ', **:timer:**').then( (m) =>{
                      m.edit( message.member + ', **عندك كام سنة 🎓**' )///n3k4a is one  
                      setTimeout(() => {
                        m.delete()///n3k4a is one  
                      }, 10000);
                      m.channel.awaitMessages( m2 => m2.author == message.author,{ maxMatches: 1, time: 60*1000 } ).then ( (m2) => {
                          m2 = m2.first();
                          var age = m2.content;
                          m2.delete()
                          message.channel.send( message.member + ', **:timer:**').then( (m) =>{
                            m.edit( message.member + ', **ما هي لغه البرمجة الخاصه بك ؟ 🎙**' )
                            setTimeout(() => {///n3k4a is one  
                              m.delete()
                            }, 10000);
                            m.channel.awaitMessages( m1 => m1.author == message.author,{ maxMatches: 1, time: 60*1000 } ).then ( (m3) => {
                                m3 = m3.first();
                                var ask = m3.content;
                                m3.delete();
                                message.channel.send( message.member + ', **:timer:**').then( (m) =>{
                                  m.edit( message.member + ', **VarوCost هل تعرف الفرق بين  📑**' )///n3k4a is one  
                                  setTimeout(() => {
                                    m.delete()
                                  }, 10000);
                                  m.channel.awaitMessages( m1 => m1.author == message.author,{ maxMatches: 1, time: 60*1000 } ).then ( (m4) => {
                                      m4 = m4.first();///n3k4a is one  
                                      var ask2 = m4.content;
                                      m4.delete();///n3k4a is one  
                                      message.channel.send( message.member + ', **:timer:**').then( (m) =>{
                                        m.edit( message.member + ', **لماذا يجب علينا قبولك اعطي للإدارة كود مسويه🤔**' )
                                        m.channel.awaitMessages( m1 => m1.author == message.author,{ maxMatches: 1, time: 60*1000 } ).then ( (m5) => {///n3k4a is one  
                                            m5 = m5.first();
                                            var ask3 = m5.content;
                                            m5.delete();///n3k4a is one  
                      m.edit(message.member + ', **....جارى جمع البيانات**').then( (mtime)=>{
                        setTimeout(() => {
                          let embed = new Discord.RichEmbed()///n3k4a is one  
                        .setColor('RANDOM')
                        .setTitle(`**تقديم ادارة** [__**${message.guild.name}**__]`)
                        .addField('**`الاسم`**', `${name}` , true)
                        .addField('**`العمر`**', `${age}` , true)
                        .addField('**`هما هي لغه البرمجة الخاصه به ؟ `**',`${ask}`)///n3k4a is one  
                        .addField('**`*VarوCost هل يعرف الفرق بين `**',`${ask2}`)
                        .addField('**`لماذا يجب علينا ان نقبله؟ سوف يعطي الإدارة كود هو مسويه`**',`${ask3}`)
                        .setFooter(message.author.username,'https://images-ext-2.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif')
                        channel.send(embed)
                        }, 2500);///n3k4a is one  
                        setTimeout(() => {
                          mtime.delete()
                        }, 3000);
 
                  })
                })
                })
              })
            })
          })
        })
        })
              })
          })
        })///n3k4a is one  
    }
}
        });

 client.on('message', message=>{///n3k4a is one  
            if(message.content.startsWith("#settakdimat")) {
            if(!message.channel.guild) return;///n3k4a is one  
                if(message.author.bot) return;
                if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply("**تحتاج الى `MANAGE_CHANNELS`**");
                message.guild.createChannel("تقديمات", "text").then(c =>{
                    c.overwritePermissions(message.guild.id, {///n3k4a is one  
                        SEND_MESSAGES: false
 
                          })///n3k4a is one  
                })
    message.channel.send("**✅ تم انشاء روم التقديمات بنجاح**")///n3k4a is one  
            }
            })
 
client.on("message", msg => { //Toxic Codes
  if(msg.author.bot) return;
  if(msg.channel.type === 'dm') return;
let prefix = '#'; //البرفكس
let msgarray = msg.content.split(" ");
let cmd = msgarray[0];
let args = msgarray.slice(1);
if(!msg.guild.member(msg.author).hasPermission("MANAGE_ROLES")) return;
if(cmd === `${prefix}قبول`){
 
 
 
  let aUser = msg.guild.member(msg.mentions.users.first() || msg.guild.members.get(args[0]));
if(!aUser) return msg.channel.send("Couldn't find users.");
 
 
   
   
    let ac = msg.guild.channels.find(`name`,"القبول-الرفض");
    if(!ac) return msg.channel.send("Couldn't find `القبول-الرفض` channel. ");
    ac.send(`** [ @Support  ]تم بنجاح قبولك  واعطائك رتبة ${aUser}**`)
 
    msg.delete().catch(O_o=>{});
    var role = msg.guild.roles.find(`name`, 'Support');
    var role2 = msg.guild.roles.find(`name`, 'Github');
    var role3 = msg.guild.roles.find(`name`, 'Heroku');
    if(!role) return msg.guild.channel.send("Could't find `Support` role.");
    aUser.addRole(role);
    aUser.addRole(role2);
    aUser.addRole(role3);
   
        return;
    }
    });

client.on('message',async message => {
  let mention = message.mentions.members.first();///n3k4a is one  
  if(message.content.startsWith("#رفض")) {
  if(!message.channel.guild) return;///n3k4a is one  
  let acRoom = message.guild.channels.find('name', 'القبول-الرفض');
  if(!acRoom) return message.reply("#روم2 من فضلك انشاء روم **القبول-الرفض** او اكتب الامر");
  if(!message.guild.member(message.author).hasPermission("MANAGE_ROLES")) return;
  if(!mention) return message.reply("منشن شخص");///n3k4a is one  
 
  acRoom.send(`**${mention} تم رفضك للاسف**`)
  }
});



 client.on('guildMemberAdd', member => {
  member.guild.fetchInvites().then(guildInvites => {
    const ei = invites[member.guild.id];
    const invite = guildInvites.find(i => ei.get(i.code).uses < i.uses);
    const inviter = client.users.get(invite.inviter.id);
    const stewart = member.guild.channels.find("name", "welcome");
     stewart.send(`<@${member.user.id}> تمت الدعوه من <@${inviter.id}>`);
   //  stewart.send(`<@${member.user.id}> joined using invite code ${invite.code} from <@${inviter.id}>. Invite was used ${invite.uses} times since its creation.`);
  });
});

client.on('message', function(msg) {
    if(msg.content.startsWith (prefix  + 'server')) {
      let embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setThumbnail(msg.guild.iconURL)
      .setTitle(`Showing Details Of  **${msg.guild.name}*`)
      .addField(':globe_with_meridians:** نوع السيرفر**',`[** __${msg.guild.region}__ **]`,true)
      .addField(':medal:** __الرتب__**',`[** __${msg.guild.roles.size}__ **]`,true)
      .addField(':red_circle:**__ عدد الاعضاء__**',`[** __${msg.guild.memberCount}__ **]`,true)
      .addField(':large_blue_circle:**__ عدد الاعضاء الاونلاين__**',`[** __${msg.guild.members.filter(m=>m.presence.status == 'online').size}__ **]`,true)
      .addField(':pencil:**__ الرومات الكتابية__**',`[** __${msg.guild.channels.filter(m => m.type === 'text').size}__** ]`,true)
      .addField(':microphone:**__ رومات الصوت__**',`[** __${msg.guild.channels.filter(m => m.type === 'voice').size}__ **]`,true)
      .addField(':crown:**__ الأونـر__**',`**${msg.guild.owner}**`,true)
      .addField(':id:**__ ايدي السيرفر__**',`**${msg.guild.id}**`,true)
 
      .addField(':date:**__ تم عمل السيرفر في__**',msg.guild.createdAt.toLocaleString())
 
      msg.channel.send({embed:embed});
    }
  });

client.on('message', message => {
           if (message.content.startsWith(prefix + "id")) {
     var args = message.content.split(" ").slice(1);
     let user = message.mentions.users.first();
     var men = message.mentions.users.first();
        var heg;
        if(men) {
            heg = men
        } else {
            heg = message.author
        }
      var mentionned = message.mentions.members.first();
         var h;
        if(mentionned) {
            h = mentionned
        } else {
            h = message.member
        }
               moment.locale('ar-TN');
      var id = new  Discord.RichEmbed()
      .setAuthor(message.author.username, message.author.avatarURL)
    .setColor("#707070")
    .addField(': دخولك لديسكورد قبل', `${moment(heg.createdTimestamp).format('YYYY/M/D HH:mm:ss')} **\n** \`${moment(heg.createdTimestamp).fromNow()}\`` ,true)
    .addField(': انضمامك لسيرفر قبل', `${moment(h.joinedAt).format('YYYY/M/D HH:mm:ss')} \n \`${moment(h.joinedAt).fromNow()}\``, true)              
    .setFooter(`D.JPEI`, 'https://images-ext-2.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif')                                
    .setThumbnail(heg.avatarURL);
    message.channel.send(id)
}      
});

client.on('message', message => {
    if(message.content == '#member') {
    const embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setImage(message.guild.iconURL)
    .addField(`حالة الأعضاء🔋`,'-',   true)
.addField(`💚 اونلاين:   ${message.guild.members.filter(m=>m.presence.status == 'online').size}`,'-',   true)
.addField(`❤ مشغول:     ${message.guild.members.filter(m=>m.presence.status == 'dnd').size}`,'-',   true)
.addField(`💛 خامل:      ${message.guild.members.filter(m=>m.presence.status == 'idle').size}`,'-',   true)  
.addField(`🖤 اوفلاين:   ${message.guild.members.filter(m=>m.presence.status == 'offline').size}`,'-',  true)
.addField(`💙   الكل:  ${message.guild.memberCount}`,'-',   true)        
         message.channel.send({embed});
 
    }
  });

  client.on('message', message => {
    if (message.content.startsWith("#av")) {
        var mentionned = message.mentions.users.first();
    var x5bzm;
      if(mentionned){
          var x5bzm = mentionned;
      } else {
          var x5bzm = message.author;
         
      }
        const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setImage(`${x5bzm.avatarURL}`)
      message.channel.sendEmbed(embed);
    }
});

client.on("message", message => {    
          if(!message.channel.guild) return;
   if(message.author.bot) return;
      if(message.content === "#own"){
          const embed = new Discord.RichEmbed()
 
 
   .setColor('RANDOM')
  .setTimestamp()
      .addField(':crown:**__<@462006869834203159>__**',`**${msg.guild.owner}**`,true)
 
 
       .setFooter('Toxic Codes')
 
 
   message.channel.send({embed});
      }
  });

client.on('message',message =>{
    if(message.content ==  "#top inv"){
message.guild.fetchInvites().then(i =>{
var invites = [];
 
i.forEach(inv =>{
    var [invs,i]=[{},null];
   
    if(inv.maxUses){
        invs[inv.code] =+ inv.uses+"/"+inv.maxUses;
    }else{
        invs[inv.code] =+ inv.uses;
    }
invites.push(`  لقد دعوت  :- (${inv.inviter}) =  (${invs[inv.code]}) \;`);
 
invites.push( `رابط الانفايت حق  :point_up::skin-tone-1::  ${inv.url} \;`);
});
  message.channel.send(invites.join(`\n`)+'\n\n**By @everyone:** '+message.author);
 
});
 
    }
});

client.on ("guildMemberAdd", member => {
 
   var role = member.guild.roles.find ("name", "Member");
   member.addRole (role);
 
})



client.on('message', message => {
    if (message.author.bot) return;
     if (message.content  === prefix + "help2") {
          const embed = new Discord.RichEmbed()
 
 
   .setColor('RANDOM')
  .setTimestamp()
 
  .addField("╔[❖════════════❖]╗",' ‎ ')
 .addField("      اوامر عامه      ",' ‎ ')
 .addField("  ╚[❖════════════❖]╝`⦁",' ‎ ')
   .addField("❖ #member ➾ معلومات الاعضاء ⦁",' ‎ ')
     .addField("❖ #av ➾ صورة حسابك ⦁",' ‎ ')
               .addField("❖ #id ➾ اي دي ⦁",' ‎ ')
               .addField("❖ #invite ➾ رابط اضافة البوت⦁",' ‎ ')
.addField("❖ #own ➾ مسؤول البوت⦁",' ‎ ')
.addField("❖ #top-inv ➾ اكثر شخص بالدعوات ⦁",' ‎ ')
.addField("❖ ❖ #ping ➾ عرض سرعه اتصال البوت ⦁",' ‎ ')
.addField("❖ ❖ #server ➾ معلومات عن السيرفر ⦁",' ‎ ')
.addField("❖ ❖ #settakdimat➾ لظهور التقديمات في هئا الروم اذا تبي تقديم ⦁",' ‎ ')
.addField("❖ ❖ #setkbol ➾ لرفض او قبول التقديم ⦁",' ‎ ')
          
 .setFooter('Turbo Codes')
 
 
   message.channel.send({embed});
 
 
    }
});


client.login(process.env.BOT_TOKEN);
