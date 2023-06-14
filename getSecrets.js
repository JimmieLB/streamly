try {
  module.exports = require('./config.js');
} catch {
  module.exports = require('./etc/secrets/config.js');
}