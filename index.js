const server = require('./src/app');
const { conn } = require('./src/db');

const { bulkCreateCategories } = require('./src/controllers/categoriesLoader');
const { bulkCreateProducts } = require('./src/controllers/productsLoader');

// const force = (process.env.FORCE || false)

conn.sync({ force: true })
    .then(() => bulkCreateCategories())
    .then(() => bulkCreateProducts())
    .then(() => {
        server.listen(3001, () => {
            console.log('%s listening at 3001');
        });
    })
    .catch(e => console.log('ERROR :( ' + e));
