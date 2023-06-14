const mongoose = require('mongoose');
const CONNECTION = require('../getSecrets.js').CONNECTION;
const CONNECTIONPARAMS = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};

mongoose.connect(CONNECTION, CONNECTIONPARAMS);
// mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  name: 'String',
  followers: 'Number'
});

let Repo = mongoose.model('Data', repoSchema);

let save = (objs) => {
  return Repo.insertMany(objs);
};

let get = (num) => {
  return Repo.find({}, null, {limit: 25, sort: { 'followers': -1 }});
};

let reset = () => {
  // * DELETE ALL
  Repo.remove({}, (data) => {
    console.log("DATA", data);
  });
}

module.exports.save = save;
module.exports.get = get;
module.exports.reset = reset;