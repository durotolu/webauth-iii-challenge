const server = require('./server');
require('dotenv').config();

const port = process.env.PORT;
server.listen(port, () => console.log(`\n** Running on port ${port} **\n`));