let responseHandler = {};
let successMessages = require('../config/successMessages');
let errorMessages = require('../config/errorMessages');

responseHandler.success = function (res, data = null, message = null) {
	return res.json ({
		success: true,
		message: successMessages.success,
		data: data || null
	})
}

responseHandler.fail = function (res, data = null, message = null) {
	return res.json ({
		success: false,
		message: errorMessages.fail,
		data: data || null
	})
}

responseHandler.error = function (res, data = null, message = null) {
	return res.json ({
		success: false,
		message: errorMessages.error,
		data: data || null
	})
}

module.exports = responseHandler;