const mongoose = require('mongoose');
const MONGO_HOSTNAME = 'localhost';
const MONGO_PORT = '27017';
const MONGO_DB = 'project';
const url = `mongodb://${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}`;

var _db;

// Connect to mongo db instance
exports.connect = async function() {
	try {
	    _db = await mongoose.connect(url, {
	        useNewUrlParser: true,
	        useUnifiedTopology: true,
	        useFindAndModify: false,
	        useCreateIndex: true
	    });
	} catch (e) {
		console.log('Error while connecting mongo db: ', e);
	}
}

// Export database instance
exports.db = async function () {
	try {
		if(!_db) {
			_db = await this.connect();
		}
		return _db;
	} catch(e) {
		console.log('Error while getting db instance: ', e);
	}
}