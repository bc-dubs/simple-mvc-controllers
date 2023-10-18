// Like url struct we had in the past

const controllers = require('./controllers'); // Actually returns index.js, so can put useful vars here

const router = (app) => {

    // Defining a get request handler
    // First parameter is url, next parameter is the function that is called
    app.get('/', controllers.index);
    app.get('/page1', controllers.page1);
    app.get('/page2', controllers.page2);
    app.get('/getName', controllers.getName);

    // Can use wildcards in urls. Will use the first matching url, so this is 
    // superceded by all the urls above it.
    app.get('/*', controllers.notFound);

    app.post('/setName', controllers.setName);
};

module.exports = router;
