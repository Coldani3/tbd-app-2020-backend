export const login = (req, res) => {
	const username = req.params.username;
	const encryptedPassword = req.params.password;
	//TODO: Decrypt password

	//decrypt, process and validate
	res.send('sample user token here');

	res.json()
};

export const logout = (req, res) => {

};

export const submitClearingForm = (req, res) => {

};

export const analytics = (req, res) => {

};