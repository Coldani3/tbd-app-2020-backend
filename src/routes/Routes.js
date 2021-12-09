function Routes(app) {
	app.route("/login")
		.get((req, res) => {
			//decrypt, process and validate
			res.send('sample user token here');
		})
	;
}

export default routes;