module.exports.GITHUB_API_KEY = 'key';
const USERNAME = 'Atlas Username';
const PASSWORD = 'Atlas Password';
module.exports.CONNECTION = `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.r6h64ft.mongodb.net/?retryWrites=true&w=majority`;
module.exports.TOKEN = 'github api key';
module.exports.CONNECTIONPARAMS = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};