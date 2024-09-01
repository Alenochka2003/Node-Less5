const http = require('http');

const server = http.createServer((req, res) => {
    // Проверка заголовка Authorization
    if (!req.headers.authorization) {
      res.statusCode = 401;
      res.setHeader('Content-Type', 'text/plain');
      res.end('Unauthorized');
    } else {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.end('Authorization header received');
    }
  });
  

  server.listen(3000, () => {
    console.log('Server running on port 3000');
  });
  