const express = require('express');
var bodyParser = require('body-parser');  

const app = express();
const router = express.Router();
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

router.get('/', (req, res) => {
  res.send('Successful response from express');
});

// route name should be same for both serverless.yaml(api-gateway) and express-app
router.post('/signup', (req, res) => {
    console.log("===>", JSON.stringify(req.body, null, 2));
    res.send(JSON.stringify(req.body, null, 2));
});

router.all("*", (req, res, next)=> {
  throw new Error(`Request url ${req.originalUrl} not fount, 404`)
})
app.use(router);

module.exports = app;