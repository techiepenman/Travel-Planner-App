

const app = require('./server.js');
// import { app } from './server.js';
const port = 3000;

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});