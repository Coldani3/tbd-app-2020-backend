import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const StaffSchema = new Schema({
	//TODO: Schema for staff databaes goes here.
	/*
		Sample schema template:
		username: {
			type: String,
			required: "Enter username",
			default: "UCPStaff"
		},

		NOTE: required is not a required field in these objects, and neither is default. 
	*/
});

export const AdminSchema = new Schema({

});

export const ClearingFormSchema = new Schema({
	levelThreeQualifications: {
		type: Object
	},
	name: {
		type: String,
		required: "Enter name"
	},
	addressLineOne: {
		type: String,
		required: "Please enter address"
	},
	addressLineTwo: {
		type: String
	},
	city: {
		type: String,
		required: "Please enter city"
	},
	region: {
		type: String,
		required: "Please enter region"
	},
	postcode: {
		type: String,
		required: "Please enter postcode"
	},
	email: {
		type: String,
		required: "Please enter email"
	},
	telephone: {
		type: String,
		required: "Please enter telephone number"
	},
	dateOfBirth: {
		type: Date
	},
	ucasNumber: {
		type: String
	},
	nationality: {
		type: String
	},
	convictions: {
		type: Boolean
	},
	neededSupport: {
		type: Boolean
	},
	courseLength: {
		type: String
	},
	priorCredit: {
		type: Boolean
	},
	priorCreditValue: {
		type: Number
	},
	startYear: {
		type: Number,
		required: "Please enter the year you want to start"
	},
	priorStudy: {
		type: Boolean
	},
	priortStudyDate: {
		type: Date
	},
	selectedCourse: {
		type: String,
		required: "Please enter Selected Course"
	},
	gcseEnglishLang: {
		type: Number,
		required: "Please enter English Language qualification"
	},
	gcseEnglishLit: {
		type: Number,
	},
	gcseMaths: {
		type: Number,
		required: "Please enter Maths qualification"
	},
	gcseScience: {
		type: Number,
		required: "Please enter Science qualification"
	},
	gcseLevelTwoDetails: {
		type: String
	},
	anyLevelFourQualifications: {
		type: Boolean
	},
	elqQualification: {
		type: Boolean
	}
});