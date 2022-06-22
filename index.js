const fetch = require('node-fetch');
const moment = require('moment');
const colour = require('colour');
const rs = require('readline-sync');
const spawner = require('child_process').spawn;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const dupe = (auth) => new Promise((resolve, reject) => {

  fetch('http://kitkabackend.eastus.cloudapp.azure.com:5010/round/finishv2/3', {
    method: 'GET',
    headers: {
      'authorization': auth
    }
  })
    .then(res => res.text())
    .then(data => {
      resolve(data);
    })
    .catch(err => {
      reject(err);
    });

});

(async () => {

  console.log(`/ Trophy And Crown Duplication Semi Brutal! [Recode V2]
/ By : > xDast#8745 | Instagram : @xdast0 <' - Credit : @dkmpostor & @Eskey`.bold.gret);
  console.log('');
  console.log(`/ Free Script`.bold.grey);
  console.log(`/ Kalo mau recode, silahkan gunakan sc lama saya, jadilah kreatif!`.bold.grey);
  console.log(`/ If you want to recode, feel free to use my old script, be creative!`.bold.grey);
  console.log('');
console.log(`/  Have problem? Report to my discord > xDast#8745 <`.rainbow);
console.log('');

  const auth = rs.question('/ Enter Authentication Code! : '.rainbow);
  console.log('');

  while (true) {

const result = await dupe(auth);

    if (!result) {
      console.log(`/ wrong auth code detected, if this was a spam then your auth is expired! (do CTRL + C to close script!)`.underline.red);
      console.log('');

    }
   else if (result.includes('User')) {

const data = JSON.parse(result);
const username = data.User.Username;
const country = data.User.Country;
const trophy = data.User.SkillRating;
const crown = data.User.Crowns;

console.log(`\r / Date : ${moment().format('YYYY MMMM Do')} | Time : ${moment().format('HH:mm:ss')}`.bold.white);
console.log(`In-Game Name : ${username}`.bold.green);
console.log(`Country : ${country}`.bold.grey);
console.log(`Trophy : ${trophy}`.bold.rainbow);
console.log(`Crown : ${crown}`.bold.rainbow);

      console.log('');
      await dupe(auth);
      console.log(`/ + | ${moment().format('HH:mm:ss')}`);
      await sleep(3500);
      await dupe(auth);
      console.log(`/ + | ${moment().format('HH:mm:ss')}`);
      await sleep(3500);
      await dupe(auth);
      console.log(`/ + | ${moment().format('HH:mm:ss')}`);
      await sleep(3500);
      await dupe(auth);
      console.log(`/ + | ${moment().format('HH:mm:ss')}`);
      await sleep(3500);
      await dupe(auth);
      console.log(`/ + | ${moment().format('HH:mm:ss')}`);
      await sleep(3500);
      await dupe(auth);
      console.log(`/ + | ${moment().format('HH:mm:ss')}`);
      await sleep(3500);
      await dupe(auth);
      console.log(`/ + | ${moment().format('HH:mm:ss')}`);
      await sleep(3500);
      await dupe(auth);
      console.log(`/ + | ${moment().format('HH:mm:ss')}`);
      await sleep(3500);
      await dupe(auth);
      console.log(`/ + | ${moment().format('HH:mm:ss')}`);
      await sleep(3500);
      await dupe(auth);
      console.log(`/ + | ${moment().format('HH:mm:ss')}`);
      await sleep(3500);
      await dupe(auth);
      console.log(`/ + | ${moment().format('HH:mm:ss')}`);
      await sleep(3500);
      await dupe(auth);
      console.log(`/ + | ${moment().format('HH:mm:ss')}`);
      await sleep(3500);
      await dupe(auth);
      console.log(`/ + | ${moment().format('HH:mm:ss')}`);
      await sleep(3500);
      await dupe(auth);
      console.log(`/ + | ${moment().format('HH:mm:ss')}`);
      await sleep(3500);
      console.log('');
      await sleep(500);
      console.log(`/ some trophy may not be duped into the account.`);
      console.log(`/ 10 seconds delay starting...`);
      await sleep(10000);
      console.log(`/ delay finished.`);
      await sleep(500);
      console.log('');

    }
    
  else if (result == 'BANNED') {
      console.log(`Your Account is Banned!`.bold.red);
     break;
    }
   }
  
})();