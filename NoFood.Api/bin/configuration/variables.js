const variables = {
    Api: {
        port: process.env.port || 3000
    },
    Database: {
        connection: process.env.connection || 'mongodb+srv://admin:admin@cluster0-0yrip.mongodb.net/test'
    }
}
module.exports = variables;