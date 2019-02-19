require('dotenv').config();

const server = require('./server.js');

port = process.env.PORT || 4000;
server.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})