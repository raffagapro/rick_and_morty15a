const server = require('./src/app');
const {conn} = require('./src/DB_connection');
const PORT = 3001;

server.listen(PORT, async ()=> {
    await conn.sync({ force: true });
    console.log(`Listening on port ${PORT}`)
});


