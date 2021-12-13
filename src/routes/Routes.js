import { 
	login, 
	logout, 
	submitClearingForm, 
	analytics 
} from '../controllers/Controller';

//Actual route functionality is defined in src/controllers/Controller.js
function Routes(app) {
	app.route("/login").get(login);
	app.route("/logout").post(logout);
	app.route("/submitClearingForm").post(submitClearingForm);
	app.route("/analytics").get(analytics);
}

export default Routes;