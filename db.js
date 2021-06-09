const db = require('mongoose')

db.Promise = global.Promise

async function connect() {
    await db.connect('mongodb+srv://db_user_coltransporte:goal@cluster0.ks1b4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology : true,
    dbName: 'db_coltransporte'
    }).then(e => {
    console.log('db[Conectada con exito]')
});

}

module.exports = connect