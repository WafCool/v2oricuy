const fetch = require('node-fetch');
const moment = require('moment');
const chalk = require('chalk');
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

  console.log(`Trophy And Crown Hack Brutal! [ Recode V2 ]
By : ${chalk.bold('xDast#8745')} - Credit : @dkmpostor & @Eskey`);
  console.log('');
  console.log(`This is not VIP, i am just trying my idea and turned out it worked!`);
  console.log(`Ini bukan VIP, saya cuma ngetest ide saya ternyata berhasil!`);
  console.log('');
console.log(`Have problem? report to my discord dm [xDast#8745]`);
console.log('');

  const auth = rs.question('Enter Authentication Code! : ');
  console.log('');

  while (true) {

const result = await dupe(auth);

    if (!result) {

      console.log(chalk.red(`\r[ ${moment().format('HH:mm:ss')} ] Authentication Code Not Valid`));
      break;

    }
   else if (result.includes('User')) {

const data = JSON.parse(result);
const username = data.User.Username;
const country = data.User.Country;
const trophy = data.User.SkillRating;
const crown = data.User.Crowns;

function infor() {
console.log(chalk.bgBlack(`\r[ ${moment().format('HH:mm:ss')} ] ${chalk.white(`User : ${username}`)} | ${chalk.white(`Country : ${country}`)} | ${chalk.blue(`Trophy : ${trophy}`)} | ${chalk.red(`Crown : ${crown}`)}`));
}

function time() {(`[ ${moment().format('HH:mm:ss')} ]`)}

      infor();
      await dupe(auth);
      time();
      await sleep(4000);
      await dupe(auth);
      time();
      await sleep(4000);
      await dupe(auth);
      time();
      await sleep(4000);
      await dupe(auth);
      time();
      await sleep(4000);
      await dupe(auth);
      time();
      await sleep(4000);
      await dupe(auth);
      time();
      await sleep(4000);
      await dupe(auth);
      time();
      await sleep(8000);
      console.log('')
      infor();
      await dupe(auth);
      time();
      await sleep(4000);
      await dupe(auth);
      time();
      await sleep(4000);
      await dupe(auth);
      time();
      await sleep(4000);
      await dupe(auth);
      time();
      await sleep(4000);
      await dupe(auth);
      time();
      await sleep(4000);
      await dupe(auth);
      time();
      await sleep(4000);
      await dupe(auth);
      time();
      await sleep(10000);
      console.log(`Delay Fixed`)

    }
  else if (result == 'BANNED') {
      console.log(chalk.bgRed(`Your Account is Banned!`));
     break;
    }
  }


})();
