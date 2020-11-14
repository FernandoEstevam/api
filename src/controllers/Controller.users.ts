import { Request, Response, NextFunction } from 'express';

class ControllerUsers {
	
	index(req: Request, res: Response, next: NextFunction) {

		const { id } = req.params;

		if(!id) {
			return res.status(200).json({
				message: "Lista ID"
			});
		}

		return res.status(200).json({
			message: "Class ControllerUsers"
		});
	}

	create(req: Request, res: Response, next: NextFunction) {

		const { login, password } = req.body;

		if(!login || !password) {
			return res.status(400).json({
				message: "Informe os dados para cadastro!"
			});
			
		}
		
		return res.status(201).json({
			message: "Criado com sucesso!"
		});
		
	}
}


export default new ControllerUsers();