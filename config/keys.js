if (process.env.NODE_ENV === 'productiion') {
    module.exports = require('./prod');
} else {
    module.exports = require('./dev');
}