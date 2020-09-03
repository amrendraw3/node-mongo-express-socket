const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Player = new Schema({
    name: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('Player', Player)