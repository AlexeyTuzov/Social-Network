const {Schema, model} = require('mongoose');

const userSchema = new Schema({
    email: {type: String, unique: true, required: true},
    firstName: {type: String, required: true},
    lastName: {type: String},
    password: {type: String, required: true}
});

module.exports = model('User', userSchema);