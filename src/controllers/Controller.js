import mongoose from 'mongoose';
import { StaffSchema, AdminSchema, ClearingFormSchema } from '../models/Model';

//the stuff in the strings should probably be changed to the names of the actual tables in the database.
const Staff = mongoose.model('Staff', StaffSchema);
const Admins = mongoose.model('Admins', AdminSchema);
const ClearingForms = mongoose.model('ClearingForms', ClearingFormSchema);

const TokenLength = 15;
const ActiveTokens = [];

function generateToken() {
	let token = "";

	for (let i = 0; i < TokenLength; i++) {
		//based on https://stackoverflow.com/questions/8532406/create-a-random-token-in-javascript-based-on-user-details
		token += Math.random().toString(36).substr(2);
	}

	return token;
}

function validate(username, encryptedPassword) {

}

export const login = (req, res) => {
	const username = req.params.username;
	const encryptedPassword = req.params.password;

	//process and validate
	if (validate(username, encryptedPassword)) {
		const token = generateToken();
		ActiveTokens.push(token);

		res.json({
			token: token
		});
	}
};

export const logout = (req, res) => {

};

export const submitClearingForm = (req, res) => {

};

export const analytics = (req, res) => {

};