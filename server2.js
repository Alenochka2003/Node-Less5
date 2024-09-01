const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    try {
      // Специально вызовем ошибку для тестирования
      throw new Error('Тестовая ошибка');
    } catch (err) {
      // Логируем ошибку в файл errors.log
      fs.appendFile('errors.log', `${new Date().toISOString()} - ${err.message}\n`, (error) => {
        if (error) console.error('Ошибка при записи в лог файл:', error);
      });
  
      res.statusCode = 500;
      res.setHeader('Content-Type', 'text/plain');
      res.end('Internal Server Error');
    }
  });
  
  server.listen(3000, () => {
    console.log('Server running on port 3000');
  });
  