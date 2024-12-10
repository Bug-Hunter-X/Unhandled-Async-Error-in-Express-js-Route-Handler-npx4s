const express = require('express');
const app = express();
app.get('/', async (req, res) => {
  try {
    await someAsyncOperation();
    res.send('Hello World!');
  } catch (err) {
    console.error(err);
    res.status(500).send('Something went wrong!');
  }
});
app.listen(3000, () => console.log('Server listening on port 3000'));

async function someAsyncOperation() {
  // Simulate an asynchronous operation that might fail
  await new Promise(resolve => setTimeout(resolve, 100));
  // Simulate a potential error
  if (Math.random() < 0.5) {
    throw new Error('Something went wrong!');
  }
}