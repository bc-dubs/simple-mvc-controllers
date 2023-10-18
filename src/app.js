// app.js should be one-time setup, does not need to change if the overall app focus doesn't change
// Adding new pages etc. should be done in edits to other files

const path = require('path');
const express = require('express');
const compression = require('compression');
const favicon = require('serve-favicon');
const bodyParser = require('body-parser');

const router = require('./router.js');

const port = process.env.PORT || process.env.NODE_PORT || 3000;

// Express: popular js library for web servers
// Adds functionality to existing http module
// Server is encapsulated in an "application" (hence "app.js")

const app = express();
// Static file hosting: Makes accessing client-side files much easier.
app.use('/assets', express.static(path.resolve(`${__dirname}/../client/`)));

// Compression: Node.js middleware that compresses files for efficient sending/receiving
// Most internet traffic is actually compressed
// But Node.js does not do this by default
app.use(compression());

// Serve Favicon: Express plugin (so is compression, actually)
// Takes images, makes differently sized copies, and handles server requests
// Can cache favicon so the server is not constantly asking
app.use(favicon(`${__dirname}/../client/img/favicon.png`));

// Body Parser: Express plugin for parsing post requests
// Can parse json, urlencoded, etc.
// The given function will be called everytime a post request happens. It happens before the url's mapped function is called
app.use(bodyParser.urlencoded({extended: false})); // Call a function of the bodyParser object & give it options

router(app);

app.listen(port, (err) => {
  if (err) throw err; // Throw exception to console if server doesn't start successfully

  console.log(`Listening on port ${port}`); // otherwise, let us know it did start
});


