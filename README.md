# Open MCT Exercise

Make sure that you have [node.js](https://nodejs.org/en/) installed and [git](https://git-scm.com/)

## MCT Tutorial Server 
https://github.com/nasa/openmct-tutorial

```
git clone https://github.com/nasa/openmct-tutorial.git
cd openmct-tutorial
npm install
```

Before starting the server make sure you modify `example-server/server.js` and add 
```
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:8081");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
```
to enable CORS.

Then run
```
npm start
```
to start the server.

## MCT Example Frontend Server
Make a clone of this repository and change directory to this repository then run
```
npm install
npm run serve
```
This will run the server and allow you to access the page from http://localhost:8081