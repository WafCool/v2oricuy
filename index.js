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

  console.log(`Trophy And Crown Hack Safe! [ReEdit]
By : ${chalk.bold('xDast#8745')} - Credit : @dkmpostor & @Eskey
`);

  const auth = rs.question('Enter Authentication Code! : ');
  console.log('');

  while (true) {

    const result = await dupe(auth);
    if (!result) {

      console.log(chalk.red(`\r[ ${moment().format('HH:mm:ss')} ] Authentication Code Not Valid`));
      break;

    }
   else if (result.includes('User')) {
   
function infor() {
      const data = JSON.parse(result);
      const username = data.User.Username;
      const country = data.User.Country;
      const trophy = data.User.SkillRating;
      const crown = data.User.Crowns;
console.log(chalk.bgBlack(`\r[ ${moment().format('HH:mm:ss')} ] ${chalk.white(`User : ${username}`)} | ${chalk.blue(`Trophy : ${trophy}`)} | ${chalk.red(`Crown : ${crown}`)}`));
}

      await dupe(auth);
      infor();
      await sleep(5000);
      await dupe(auth);
      infor();
      console.log('');
      console.log(chalk.bgGrey(`[ Fixed Delay ]`),);
      console.log('');
      await sleep(6000);

    }
     else if (result == 'BANNED') {
      console.log(chalk.bgRed(`Your Account is Banned!`));
     break;
    }
  }


})();