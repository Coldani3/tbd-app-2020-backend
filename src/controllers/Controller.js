import mongoose from 'mongoose';
import { StaffSchema, AdminSchema, ClearingFormSchema } from '../models/Model'

//the stuff in the strings should probably be changed to the names of the actual tables in the database.
const Staff = mongoose.model('Staff', StaffSchema);
const Admins = mongoose.model('Admins', AdminSchema);
const ClearingForms = mongoose.model('ClearingForms', ClearingFormSchema);

export const login = (req, res) => {
	const username = req.params.username;
	const encryptedPassword = req.params.password;
	//TODO: Decrypt password

	//decrypt, process and validate
	res.send('test');

	res.json({
		token: "token goes here"
	});
};

export const logout = (req, res) => {

};

export const submitClearingForm = (req, res) => {

};

export const analytics = (req, res) => {

};