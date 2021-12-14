import mongoose from 'mongoose';
import { StaffSchema, ClearingFormSchema } from '../models/Model';
import { 
	ClearingFormsDatabase, 
	StaffDatabase, 
	TokenLength, 
	TempClearingFormConversionTable 
} from '../global/Constants';

//the stuff in the strings should probably be changed to the names of the actual tables in the database.
const Staff = mongoose.model(StaffDatabase, StaffSchema);
//const Admins = mongoose.model(AdminsDatabase, AdminSchema);
const ClearingForms = mongoose.model(ClearingFormsDatabase, ClearingFormSchema);

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
	//TODO: interact with database
	return Staff.findById(/*whatever*/);
}

function validateToken(token) {
	return ActiveTokens.includes(token);
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

		//TODO: register token to server as a valid one and remove after x amount of time and on login
	}
};

export const logout = (req, res) => {
	const token = req.params.token;

	if (validateToken(token)) {
		ActiveTokens.splice(ActiveTokens.indexOf(token), 1);
		res.send("Logged out");
	}
};

export const submitClearingForm = (req, res) => {
	const obj = req.params.clearingFormData;

	if (obj) {
		res.send("received");

		//TODO: write obj to database after verification and convert object names to same as database
		const formattedClearingForm = {};

		/*FIXME: once the front end is fixed to use the same names as the back end, just use obj and
		  get rid of this. Or don't, I guess. You'll just have to sit with this messy
		  and unecessary code in your codebase forever. Sitting. On your conscience. Forever.
		  Delete this comment if you want, but you can't delete the guilt. No one can.*/
		for (const key of Object.keys(obj)) {
			formattedClearingForm[TempClearingFormConversionTable[key]] = obj[key];
		}

		/*honestly just checking formattedClearingForm so I can use it before I add any actual code
		  feel free to remove it later*/
		if (formattedClearingForm && !ClearingForms.find()/*.whatever().etc.()*/) {
			//add data to database
			//ClearingForms.create();
		}
	} else {
		res.send("did not receive");
	}
};

export const analytics = (req, res) => {
	//get the data, process it by the request's parameters, and then send it.
	const token = req.params.token;

	if (validateToken(token)) {
		//do stuff
	}
};