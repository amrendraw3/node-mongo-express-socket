const Player = require('../models/players');
const responses = require('../handlers/responses');

exports.index = async function (req, res) {
	try {
		let data = await Player.find({}).exec();
		return responses.success(res, data);
	} catch (e) {
		return responses.error(res);
	}
}

exports.create = async function (req, res) {
	try {
		let data = await Player.create({name: 'John'});
		return responses.success(res, data);
	} catch (e) {
		return responses.error(res);
	}
}