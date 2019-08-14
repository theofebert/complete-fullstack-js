// Steps 2.2_A
import https from 'https';

// Steps 2.2_B
// https.get('https://www.lynda.com', res => {
//   console.log('Response status code: ', res.statusCode);
//
//   res.on('data', chunk => {
//       console.log(chunk.toString());
//     });
// });

// Steps 2.2_C
import http from 'http';

// Steps 2.2_D then Steps 2.2_G
//const server = http.createServer();

// Steps 2.2_E
//server.listen(8080);

// Steps 2.2_F
server.on('request', (req, res) => {
  res.write('Hello HTTP!\n');
  setTimeout(() => {
    res.write('I can stream!\n');
    res.end();
  }, 3000);
});

// Steps 2.2_H
server.listen(8080);
