import express from 'express';

const router = express.Router();

router.get('/', (req, res, next) => {
	return res.status(200).json({
		title: "API",
		version: "1.0.0"
	});
});


export default router;