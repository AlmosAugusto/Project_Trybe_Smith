import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes'; // REF: conteudo do Course "Instalando o Express e inicializando a aplicação"
import UsersService from '../services/users.service';
import generateJWT from '../utils/generateToken';

class UsersController {
  constructor(private service: UsersService = new UsersService()) { }

  public create = async (req: Request, res: Response) => {
    const userData = req.body;
    // console.log(userData.username, 11, 'controler');
    
    const createdUser = await this.service.create(userData);
    // console.log(createdUser.id, 14, 'controler');
    
    const token = generateJWT(userData.username, createdUser.id);
    return res.status(StatusCodes.CREATED).json({ token });
  };
}

export default UsersController;