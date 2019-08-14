// Steps 2.3_D
import config from './config';

// Steps 2.3_P
import apiRouter from './api';

// Steps 2.3_I
// Steps 2.3_L :
//import fs from 'fs';

// Steps 2.3_A
import express from 'express';

// Steps 2.3_B
const server = express();

// Steps 2.3_F
server.get('/', (req, res) => {
  res.send('Hello Express!');
});

// Steps 2.3_G
// server.get('/about.html', (req, res) => {
//   res.send('The About Page');
// });

// Steps 2.3_J
// server.get('/about.html', (req, res) => {
//   fs.readFile('./about.html', (err, data) => {
//       res.send(data.toString());
//     });
// });

// Steps 2.3_Q
server.use('/api', apiRouter);

// Steps 2.3_K : simply magis middleware
server.use(express.static('public'));

// Steps 2.3_C
// server.listen();

// Steps 2.3_E
server.listen(config.port, () => {
  console.info('Express listening on port: ', config.port);
});
