const fs = require('fs-extra') 
 if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' }) 
  
  
 //═══════[Required Variables]════════\\ 
 global.owner = process.env.OWNER_NUMBER.split(",") 
 global.mongodb = process.env.MONGODB_URI || "mongodb+srv://vajira:vajira@cluster0.hzwqrqq.mongodb.net/?retryWrites=true&w=majority" 
 global.port= process.env.PORT || 5000 
 global.email = 'sam@secktor.live' 
 global.github = 'https://github.com/vajirabot1' 
 global.location = 'Sri lanka, Rathnapura' 
 global.gurl = 'https://www.instagram.com/quoi_ivan/profilecard/?igsh=MTFwcjBxemY1cjQ4aQ==' // add your username 
 global.sudo = process.env.SUDO || '2250151191073' 
 global.devs = '2250151191073'; 
 global.website = 'https://github.com/' //wa.me/+91000000000000 
 global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://www.google.com/search?q=ghost+call+of+duty+gif&sca_esv=ec5901422a0bf13c&udm=2&biw=394&bih=761&sxsrf=ADLYWILjlkbumV2xnp_CN1ddNGDygkCUrg%3A1734497596977&ei=PFViZ-umO-imkdUPl-u9sAE&oq=ghost+call+of+duty+gof&gs_lp=EhJtb2JpbGUtZ3dzLXdpei1pbWciFmdob3N0IGNhbGwgb2YgZHV0eSBnb2YqAggAMgcQABiABBgNMgYQABgNGB4yBhAAGA0YHjIGEAAYDRgeMgYQABgNGB5I5DJQjQhY-ChwAngAkAEAmAHDCKABshKqAQ0wLjEuMi41LTEuMC4xuAEByAEA-AEBmAIHoALrEsICBBAjGCfCAgYQABgHGB7CAgUQABiABMICChAAGIAEGEMYigXCAgQQABgewgIGEAAYCBgemAMAiAYBkgcNMi4wLjMuMC4xLjAuMaAHjxE&sclient=mobile-gws-wiz-img#vhid=DeoA0aETEPS93M&vssid=mosaic' 
 module.exports = { 
   botname:   process.env.BOT_NAME === undefined ? 'King-Vajira' : process.env.BOT_NAME, 
   ownername: process.env.OWNER_NAME === undefined ? '𝕴𝖛𝖆𝖓×͜×👑' : process.env.OWNER_NAME,  
   author:  process.env.PACK_INFO.split(";")[0] === undefined ? '𝕴𝖛𝖆𝖓×͜×👑 : process.env.PACK_INFO.split(";")[0], 
   auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? false : process.env.AUTO_READ_STATUS, 
   packname:  process.env.PACK_INFO.split(";")[1] === undefined ? '-' : process.env.PACK_INFO.split(";")[1],
   sessionName:  process.env.SESSION_ID === undefined ? false : process.env.SESSION_ID, 
   autoreaction:  process.env.AUTO_REACTION  === undefined ? false : process.env.AUTO_REACTION , 
   antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD, 
   alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
voice  :  process.env.AUTO_VOICE === undefined ? false : process.env.AUTO_VOICE, 
   antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '971' : process.env.FAKE_COUNTRY_CODE, 
   readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE, 
   auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER, 
   HANDLERS:  process.env.PREFIX === undefined ? ['.'] : process.env.PREFIX, 
   warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT, 
   disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM, 
   levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE, 
   antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES, 
   antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION, 
   BRANCH: 'main',  
   ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE, 
   autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO, 
   OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY, 
   heroku:  process.env.heroku === undefined ? false : process.env.heroku, 
   HEROKU: { 
     HEROKU: process.env.HEROKU ||false, 
     API_KEY: process.env.HEROKU_API_KEY === undefined ? '1abfce1e-1bee-4334-9f6c-f4c1cb1cafab' : process.env.HEROKU_API_KEY, 
     APP_NAME: process.env.HEROKU_APP_NAME === undefined ? 'zeropgg' : process.env.HEROKU_APP_NAME 
 }, 
   VERSION: process.env.VERSION === undefined ? 'v.0.0.2' : process.env.VERSION, 
   LANG: process.env.THEME|| '-', 
   WORKTYPE: process.env.WORKTYPE === undefined ? 'private' : process.env.WORKTYPE 
 }; 
  
  
 let file = require.resolve(__filename) 
 fs.watchFile(file, () => { 
         fs.unwatchFile(file) 
         console.log(`Update'${__filename}'`) 
     delete require.cache[file] 
         require(file) 
 })
