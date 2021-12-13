import express from 'express';
import Routes from 'src/routes/Routes';
import mongoose from 'mongoose';

const app = express();
const PORT = 4000;
const DBLink = "";

app.get('/', (req, res) =>
	res.send(`Node and express server running on port ${PORT}`)
);

app.listen(PORT, () => {
	console.log(`Your server is running on port ${PORT}`);
});

Routes(app);

mongoose.Promise = global.Promise;

mongoose.connect(DBLink, {
	useNewUrlParser: true,
	useUnifiedTopology: true
});

app.use(express.urlencoded({ extended: true }));

app.use(express.json());