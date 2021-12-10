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