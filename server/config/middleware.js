let morgan = require('morgan');
let bodyParser = require('body-parser');
let path = require('path');

module.exports = function(app, express){
    
    app.use(morgan('dev'));
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());
  
    app.use(express.static(path.join(__dirname, '/../../dist')));  

};