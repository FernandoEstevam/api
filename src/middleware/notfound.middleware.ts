import { Request, Response, NextFunction } from 'express';
import HttpException from '../exception/HttpException';

const notFound = (req: Request, res: Response, next: NextFunction) => {

	const erro = new HttpException(400,"Not found");

	next(erro);

}

export default notFound;