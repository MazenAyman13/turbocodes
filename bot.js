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
     
 .setFooter('Toxic Codes')
 
 
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
     
     
     
 .setFooter('Toxic Codes')
 
 
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

 client.on("message", message => {
            if(message.content.startsWith("#تقديم")) {
        if(!message.channel.guild) return;
                if(message.author.bot) return;
        let channel = message.guild.channels.find("name", "hello")///n3k4a is one  
            if(!channel) return message.reply("**لانشاء روم ✽-التقديمات !!setsubmissions من فضلك اكتب الامر**")
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
                                        m.edit( message.member + ', **لماذا يجب علينا ان نقبلك ؟ اعطنا كودالشخص مسويه ؟🤔**' )
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
                        .addField('**`لماذا يجب علينا ان نقبلك ؟ اعطنا كودالشخص مسويه ؟🤔`**',`${ask3}`)
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

client.login(process.env.BOT_TOKEN);
