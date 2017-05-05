let express = require('express');
let mongoose = require('mongoose');

let app = express();
   
let port = 8000;

require("./server/config/middleware.js") (app, express);

///////////////////////Database Connection//////////////
mongoose.connect('mongodb://localhost/featureRequest');
let db = mongoose.connection;
db.once("open", () => {
	console.log("mongoDB is open");
});

///////////////////////Server////////////////////////
app.listen(port, () => {
	console.log("App is listening on port", port)
})