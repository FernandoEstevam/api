import path from 'path';

module.exports = {
		client: 'mysql',
		connection: {
		host: process.env.HOST,
		user: process.env.DB_USER,
		password: process.env.DB_PASSWORD,
		database: process.env.DB_NAME
	},
	migrations:  {
		directory: path.resolve(__dirname, 'src', 'database', 'migrations')
	},
	seeds:  {
		directory: path.resolve(__dirname, 'src', 'database', 'seeds')
	},

	useNullDefault: true
}