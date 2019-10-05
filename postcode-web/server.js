const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'build')));
app.use((req, res) => res.sendFile(`${__dirname}/build/index.html`));

// start server
app.listen(80, (req, res) => {
  console.log(`server listening on port: ${80}`);
});