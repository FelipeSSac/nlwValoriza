import express from 'express';

const app = express();

const port = process.env.PORT || 3000;

app.get('/test', (req, res) => {
  return res.send('Olá');
})

app.post('/test-post', (req, res) => {
  return res.send('Olá metodo POST');
})

app.listen(port, () => console.log('Server is running on port ' + port))