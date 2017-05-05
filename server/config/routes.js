let userController = require('../controllers/users.js');

module.exports = function(app, express) {

	app.get('/', (req, res) => {
  	res.send('backend');
	});

	app.post('/api/users/signup', userController.signup);

};