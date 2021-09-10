const express = require('express');

const app = express();
const PORT = 3001;

app.use(express.static('client/dist'));

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
})