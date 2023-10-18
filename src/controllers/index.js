const path = require('path');

// There is no reason for the name here except an arbitary example
// of updating the server data based on a client request.
let name = 'unknown';

// sendFile automatically generates headers associated with a file
// Basically does all the hard work we formerly had to code ourselves
const hostIndex = (req, res) => res.sendFile(path.resolve(`${__dirname}/../../views/index.html`));

const hostPage1 = (req, res) => res.sendFile(path.resolve(`${__dirname}/../../views/page1.html`));

const hostPage2 = (req, res) => res.sendFile(path.resolve(`${__dirname}/../../views/page2.html`));

const notFound = (req, res) => {
  return res.sendFile(path.resolve(`${__dirname}/../../views/notFound.html`));
};

const getName = (req, res) => {
  return res.json({name}); // Sends the given object as json 
};

const setName = (req, res) => {
  if(!req.body.firstname || !req.body.lastname){
    return res.status(404).json({
      error: 'error',
      id: 'setNameMissingParams'
    });
  }

  name = `${req.body.firstname} ${req.body.lastname}`;
  return res.json({name}); // returns 200 status by default
};

module.exports = {
  index: hostIndex,
  page1: hostPage1,
  page2: hostPage2,
  notFound,
  getName,
  setName
};