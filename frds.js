const Discord = require('discord.js');
const client = new Discord.Client();
 
client.on('ready', () => {
  console.log('봇이 로딩되었습니다 / 해당봇은 MOS에서 우정이 배포하고 있습니다 / 무단배포및리셀금지입니다 / 문의는 우정#0141');
});
 
client.on('message', message => {
  if (message.content === '안녕하세요') {
    message.reply('반가워요! https://tenor.com/view/penguin-hello-hi-heythere-cutie-gif-3950966');
  }
  if (message.content === '칙칙'){
    message.reply('폭폭 https://tenor.com/view/all-aboard-train-choo-choo-express-locomotive-gif-13755084');
  }
  if (message.content === '개웃기네'){
    message.reply('ㅋㅋㄹㅃㅃ https://tenor.com/view/dancing-excited-dance-dance-move-smile-gif-16099354');
  }
  if (message.content === '아니'){
    message.reply('어쩌라구요! https://tenor.com/view/minions-blah-blah-blah-roll-eyes-eyeroll-whatever-gif-16216173');
  }
  if (message.content === '디스코드'){
    message.reply('디스코드는 전설이다... https://tenor.com/view/chirs-farley-shocked-what-huh-omg-gif-4108687');
  }
  if (message.content === '...'){
    message.reply('왜그래요? 할말이 없나요? https://tenor.com/view/emotions-reactions-trump-yes-oh-well-gif-7774956');
  }
  if (message.content === '파이브엠'){
    message.reply('노코멘트... https://tenor.com/view/umm-confused-wtf-blinking-okay-gif-7513882');
  }
  if (message.content === '배고프다'){
    message.reply('살이나 빼 ㅋ https://tenor.com/view/michael-scott-lol-laughing-nbc-nbcgifs-gif-7853551');
  }
  if (message.content === '우정'){
    message.reply('개잘생김 ㅋㅋ https://tenor.com/view/why-but-why-omg-frustrated-gif-14401277');
  }
  if (message.content === '유튜브'){
    message.reply('TV보다 재미있음 ! https://tenor.com/view/smiley-smile-sun-water-smileyface-gif-5285511');
  }
  if (message.content === '오버워치'){
    message.reply('흠... 갓겜인가용?? https://tenor.com/view/hopeless-disappointed-ryan-reynolds-facepalm-embarrassed-gif-5436796');
  }
  if (message.content === '배틀그라운드'){
    message.reply('핵... https://tenor.com/view/eye-roll-what-awkward-gif-13974633');
  }
  if (message.content === '카트라이더'){
    message.reply('16주년!! https://tenor.com/view/shocked-surprised-omg-overwhelmed-gif-4883514');
  }
  if (message.content === '대한민국'){
    message.reply('저는 대한민국에서 태어나서 기뻐요! https://tenor.com/view/jimcarrey-smile-gif-5108830');
  }
  if (message.content === '넌 누구니?'){
    message.reply('저는 2020년 8월 13일 오전 10시 55분에 우정님에 의해 만들어졌어요! https://tenor.com/view/excited-hockey-kid-gif-10474493');
  }
  if (message.content === '너 뭐야?'){
    message.reply('저는 2020년 8월 13일 오전 10시 55분에 우정님에 의해 만들어졌어요! https://tenor.com/view/excited-hockey-kid-gif-10474493');
  }
  if (message.content === '마인크래프트'){
    message.reply('마인크래프트... 재밌죠! https://tenor.com/view/head-scratch-%eb%bd%80%eb%a1%9c%eb%a1%9c-%ec%95%a0%eb%8b%88%eb%a9%94%ec%9d%b4%ec%85%98-%ec%95%84%ec%9d%b4%ec%bd%94%eb%8b%89%ec%8a%a4-pororo-gif-12634384');
  }
  if (message.content === '인성문제있어?'){
    message.reply('죄송합니다! https://cdn.discordapp.com/attachments/728850702041874523/743288115703054336/o4.jpg');
  }
  if (message.content === '컴퓨터'){
    message.reply('끄지마!! https://cdn.discordapp.com/attachments/728850702041874523/743288563117981776/1595728527822.jpg');
  }
  if (message.content === '아아'){
    message.reply('fuck해 fuck해 https://cdn.discordapp.com/attachments/728850702041874523/743288821164277870/4.jpg');
  }
  if (message.content === '할머니'){
    message.reply('할머니도 특수부대인가봐요!? https://cdn.discordapp.com/attachments/728850702041874523/743289075183779880/1595343443977.jpg');
  }
  if (message.content === '코로나'){
    message.reply('코로나 what fuck you doing?! https://cdn.discordapp.com/attachments/728850702041874523/743289263814082610/1595728527037.jpg');
  }
  if (message.content === '감사합니다'){
    message.reply('알면 됬어요 흥! https://tenor.com/view/whatever-sassy-ugh-duh-eye-roll-gif-15963614');
  }
  if (message.content === '머리부터 발끝까지'){
    message.reply('핫이슈 https://cdn.discordapp.com/attachments/728850702041874523/743290050938273853/no.1.mp4_0_00_06_067132.png');
  }
});
 
client.login('YrfFU3g5eT1hyZuinPalOoWe4X4Wel3J');
