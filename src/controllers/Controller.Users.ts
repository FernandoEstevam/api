import { Request, Response, NextFunction } from 'express';

class ControllerUsers {
	
	index(req: Request, res: Response, next: NextFunction) {

		const { id } = req.params;

		if(id) {
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
			return res.status(404).json({
				message: "Informe os dados para cadastro!"
			});
			
		}
		
		return res.status(201).json({
			message: "Criado com sucesso!"
		});
		
	}

	update(req: Request, res: Response, next: NextFunction) {
	
		const { id } = req.params;
		const { login, password } = req.body;

		if(!id) {
			return res.status(404).json({
				message: "Informe um usuario"
			});
		}

		if(!login || !password) {
			return res.status(404).json({
				message: "Informe os dados para alterar"
			});
		}

		return res.status(200).json({
			message: "Usuario atualizado com sucesso"
		});
	
	}

	delete(req: Request, res: Response, next: NextFunction) {
	
		const { id } = req.params;

		if(!id) {
			return res.status(400).json({
				message: "Informe um usuario"
			});
		}

		return res.status(200).json({
			message: "Usuario deletado com sucesso"
		});
	
	}
}


export default new ControllerUsers();