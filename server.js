// Steps 2.3_D
import config from './config';

// Steps 2.3_P
import apiRouter from './api';

// Steps 2.3_A
import express from 'express';

// Steps 2.3_B
const server = express();

// Steps 2.4_A
server.set('view engine', 'ejs');

// Steps 2.4_D
server.get('/', (req, res) => {
  res.render('index', {
    // content: 'Hello Express with EJS',

    // Steps 2.4_F
    content: 'Hello Express with <em>EJS!</em>',
  });
});

// Steps 2.3_Q
server.use('/api', apiRouter);

// Steps 2.3_K : simply magis middleware
server.use(express.static('public'));

// Steps 2.3_E
server.listen(config.port, () => {
  console.info('Express listening on port: ', config.port);
});
