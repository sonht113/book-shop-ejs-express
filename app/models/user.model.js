const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const userSchema = new mongoose.Schema(
	{
		fullName: {
			type: String,
			trim: true,
			minLength: 5,
			maxLength: 30,
			required: true,
		},
		role: {
			type: String,
			enum: ['user', 'admin'],
			default: 'user'
		},
		email: {
			type: String,
			trim: true,
			required: true
		},
		password: {
			type: String,
			trim: true,
			required: true,
			minLength: 6,
			maxLength: 20
		},
		numberPhone: {
			type: String,
			trim:true,
			required: true
		},
		address: {
			type: String,
			trim: true,
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

userSchema.pre('save', function(next) {
	if(!this.isModified('password')) {
		return next();
	}
	bcrypt.genSalt(saltRounds, (err, salt) => {
		if(err) return next(err)
		bcrypt.hash(this.password, salt, (err, hash) => {
			if(err) return next(err)
			this.password = hash
			next()
		})
	})
})
// add plugin that converts mongoose to json
// sinhVienSchema.plugin(toJSON);
// sinhVienSchema.plugin(paginate);

/**
 * @typedef User
 */
const User = mongoose.model('User', userSchema);

module.exports = User;
