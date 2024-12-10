const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // Asynchronous operation that might throw an error
  someAsyncOperation().then(() => {
    res.send('Hello World!');
  }).catch(err => {
    // Error handling is missing here.  The response is never sent if an error occurs.
    console.error(err);
  });
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