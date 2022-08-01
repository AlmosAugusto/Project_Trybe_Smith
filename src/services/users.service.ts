import { ICreatedUser, IUsers } from '../interfaces/users.interface';
import connection from '../models/connection';
import UsersModel from '../models/users.model';

class UsersService {
  public model: UsersModel;

  constructor() {
    this.model = new UsersModel(connection);
  }

  public async create(user: ICreatedUser): Promise<IUsers> {
    const createdUser = await this.model.create(user);
    return createdUser;
  }
}

export default UsersService;