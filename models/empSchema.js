const mongoose = require('mongoose')
const empSchema = new mongoose.Schema({
    Name: String,
    Email: String,
    Address: String,
    Id: Number
});
module.exports = mongoose.model('Employee', empSchema);