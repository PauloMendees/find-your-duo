import express from 'express';
const cors = require('cors');

const app = express();

app.use(cors);

export {app};