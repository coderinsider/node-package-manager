import express from 'express';
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
	res.send('Hello, Gril');
});
app.listen(PORT, () => {
	console.log(`Your server running on PORT ${PORT}`);
})