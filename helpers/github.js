const axios = require('axios');
const config = require('../getSecrets.js');

let getReposByUsername = (username) => {
  // TODO - Use the axios module to request repos for a specific
  // user from the github API

  // The options object has been provided to help you out,
  // but you'll have to fill in the URL
  console.log(typeof(`https://api.github.com/users/${username}/repos`.toString()));
  let options = {
    url: `https://api.github.com/users/${username}/repos`.toString(),
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };

  return new Promise((resolve, reject) => {
    axios.get(options.url, options).then((data) => {
      resolve(data);
    }).catch((err) => {
      reject(err);
    })
  })

}

module.exports.getReposByUsername = getReposByUsername;