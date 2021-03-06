const express = require('express'),
http = require('http');

const morgan = require('morgan');

const dishRouter = require('./routes/dishRouter');

const hostname = 'localhost';
const port = 3000;

const app = express();

app.use(morgan('dev'));

// var dishRouter = require('./routes/dishRouter');
// app.use('/dishes', dishRouter.router);

const promoRouter = require('./routes/promoRouter');
app.use('/promotions', promoRouter);

const leaderRouter = require('./routes/leaderRouter');
app.use('/leadership', leaderRouter);

app.use(express.static(__dirname + '/public'));

app.use('/dishes', dishRouter);

app.use((req, res, next) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<html><body><h1>This is an Express Server</h1></body></html>');

});



const server = http.createServer(app);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});