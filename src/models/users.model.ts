import { Pool, ResultSetHeader } from 'mysql2/promise';
import { IUsers, ICreatedUser } from '../interfaces/users.interface';

class UsersModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async create(user: ICreatedUser): Promise<IUsers> {
    const { username, classe, level, password } = user;

    const query = `INSERT INTO Trybesmith.Users 
    (username, classe, level, password ) VALUES (?, ?, ?, ?)`;
    const createdUsers = await this.connection
      .execute<ResultSetHeader>(query, [username, classe, level, password]);

    const [{ insertId }] = createdUsers; // REF: https://app.betrybe.com/course/back-end/typescript/express-com-typescript/5d873301-a228-40c3-85a3-621d4190cd71/conteudos/916d66d4-4b52-49ec-9edc-f062127806a9/criando-um-crud-de-livros/20913ab9-7322-4d3e-a0a3-13bc408cb0e4?use_case=side_bar
    console.log(insertId);
    
    return { id: insertId, ...user };
  }
}

export default UsersModel;