if(process.env.NODE_END === '') {
    module.exports = require('./prod')
} else {
    module.exports = require('./dev')
}