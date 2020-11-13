import { Request, Response, NextFunction } from 'express';
import HttpException from '../exception/HttpException';

const errorMiddleware = (error: HttpException, req: Request, res: Response, next: NextFunction) => {
	res.status(error.status || 500);

	res.json({
		message: error.message
	});

	next();
}

export default errorMiddleware;
