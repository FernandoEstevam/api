import app from '../app';

const port = process.env.PORT || 3000;

app.listen(port, () => {
	console.log(`Servidor inicado na porta ${port}: http://localhost:${port}`);
});