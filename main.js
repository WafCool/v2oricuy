const fetch = require('node-fetch');
const moment = require('moment');
const colour = require('colour');
const rs = require('readline-sync');

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
/ By : > xDast#8745 | Instagram : @xdast0 < - Credit : @dkmpostor & @Eskey`.bold.yellow);
  console.log('');
  console.log(`/ Free Script`.bold.blue);
  console.log(`/ Kalo mau recode, silahkan gunakan sc lama saya, jadilah kreatif!`.bold.blue);
  console.log(`/ If you want to recode, feel free to use my old script, be creative!`.bold.blue)
  console.log('');
console.log(`/  Have problem? Report to my discord > xDast#8745 <`.bold.blue);
console.log('');

  const auth = rs.question('/ Enter Authentication Code! : '.bold.red);
  console.log('');

  while (true) {
const result = await dupe(auth);

    if (!result) {
      console.log(`/ wrong auth code detected, if this was a spam then your auth is expired! (do CTRL + C to close script!)`.bold.red);
      console.log('');

    }
   else if (result.includes('User')) {

const data = JSON.parse(result);
const username = data.User.Username;
const country = data.User.Country;
const trophy = data.User.SkillRating;
const crown = data.User.Crowns;

console.log(`👍😁👍r / Date : ${moment().format('YYYY MMMM Do')} | Time : ${moment().format('HH:mm:ss')}`.grey);
console.log(`👍😁👍r / In-Game Name : ${username}`.yellow);
console.log(`👍😁👍r / Country : ${country}`.yellow);
console.log(`👍😁👍r / Trophy : ${trophy}`.yellow);
console.log(`👍😁👍r / Crown : ${crown}`.yellow);

      console.log('');
      await dupe(auth);
      console.log(`/ + | ${moment().format('HH:mm:ss')}`);
      await sleep(5000);
      await dupe(auth);
      console.log(`/ + | ${moment().format('HH:mm:ss')}`);
      await sleep(5000);
      await dupe(auth);
      console.log(`/ + | ${moment().format('HH:mm:ss')}`);
      await sleep(5000);
      await dupe(auth);
      console.log(`/ + | ${moment().format('HH:mm:ss')}`);
      await sleep(5000);
      await dupe(auth);
      console.log(`/ + | ${moment().format('HH:mm:ss')}`);
      await sleep(5000);
      await dupe(auth);
      console.log(`/ + | ${moment().format('HH:mm:ss')}`);
      await sleep(5000);
      await dupe(auth);
      console.log(`/ + | ${moment().format('HH:mm:ss')}`);
      await sleep(5000);
      await dupe(auth);
      console.log(`/ + | ${moment().format('HH:mm:ss')}`);
      await sleep(5000);
      await dupe(auth);
      console.log(`/ + | ${moment().format('HH:mm:ss')}`);
      await sleep(5000);
      await dupe(auth);
      console.log(`/ + | ${moment().format('HH:mm:ss')}`);
      await sleep(5000);
      await dupe(auth);
      console.log(`/ + | ${moment().format('HH:mm:ss')}`);
      await sleep(5725);
      await dupe(auth);
      console.log(`/ + | ${moment().format('HH:mm:ss')}`);
      console.log('');
      await sleep(500);
      console.log(`/ some trophy may not be duped into the account.`.grey);
      console.log(`/ 10 seconds delay starting...`.grey);
      await sleep(10325);
      console.log(`/ delay finished.`.grey);
      await sleep(500);
      console.log('');

    }
    
  else if (result == 'BANNED') {
      console.log(`Your Account is Banned!`.bold.red);
     break;
    }
   }
  
})();
