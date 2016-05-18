const GitHub = require('github-api');
const gh = new GitHub();

module.exports = function(user, cb) {
  return gh.getUser(user).getProfile();
};