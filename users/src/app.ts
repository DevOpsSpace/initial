import express from 'express';
const app = express();

app.get('/', (req, res) => {
  res.send('It works from users');
});

const port = process.env.NODE_PORT || 3000;

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});