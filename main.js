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

  console.log(`Trophy And Crown Duplication Semi Brutal! [Recode V2]
By : ${chalk.bold('xDast#8745 | Instagram : @xdast0')} - Credit : @dkmpostor & @Eskey`);
  console.log('');
  console.log(`Free Script`);
  console.log(`Kalo mau recode, silahkan pake sc lama saya, jadilah kreatif!`);
  console.log(`If you want to recode, use my old script, be creative!`)
  console.log('');
console.log(`Have problem? Report to my discord [ xDast#8745 ]`);
console.log('');

  const auth = rs.question('Enter Authentication Code! : ');
  console.log('');

  while (true) {

const result = await dupe(auth);

    if (!result) {
      console.log(`wrong auth code detected, if this was a spam then your auth is expired! (do CTRL + C to close script!)`);
      console.log('');

    }
   else if (result.includes('User')) {

const data = JSON.parse(result);
const username = data.User.Username;
const country = data.User.Country;
const trophy = data.User.SkillRating;
const crown = data.User.Crowns;

console.log(chalk.bgBlack(`\r[ ${moment().format('HH:mm:ss')} ]`));
console.log(chalk.bgWhite(`\r${chalk.green(`In-Game Name : ${username}`)}`));
console.log(chalk.bgWhite(`\r${chalk.bold(`Country : ${country}`)}`));
console.log(chalk.bgYellow(`\r${chalk.bold(`Trophy : ${trophy}`)}`));
console.log(chalk.bgRed(`\r${chalk.bold(`Crown : ${crown}`)}`));

      console.log('');
      await dupe(auth);
      console.log(`[ Success Duplicating | ${moment().format('HH:mm:ss')} ]`);
      await sleep(2500);
      await dupe(auth);
      console.log(`[ Success Duplicating | ${moment().format('HH:mm:ss')} ]`);
      await sleep(2500);
      await dupe(auth);
      console.log(`[ Success Duplicating | ${moment().format('HH:mm:ss')} ]`);
      await sleep(2500);
      await dupe(auth);
      console.log(`[ Success Duplicating | ${moment().format('HH:mm:ss')} ]`);
      console.log(`some trophy may be not duped into the account.`);
      console.log(`10 seconds delay starting...`);
      await sleep(10000);
      console.log('');

    }
  else if (result == 'BANNED') {
      console.log(chalk.bgRed(`Your Account is Banned!`));
     break;
    }
  }


})();
