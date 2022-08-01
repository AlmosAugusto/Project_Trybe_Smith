import { Pool, ResultSetHeader } from 'mysql2/promise';
import { IProducts, ICreatedProduct } from '../interfaces/products.interface';

class ProductsModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<IProducts[]> {
    const query = 'SELECT * FROM Trybesmith.Products';

    const [products] = await this.connection.execute(query);
    return products as IProducts[];
  }

  public async create(product: ICreatedProduct): Promise<IProducts> {
    const { name, amount } = product;

    const query = 'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)';
    const createdProduct = await this.connection.execute<ResultSetHeader>(query, [name, amount]);

    const [{ insertId }] = createdProduct; // REF: https://app.betrybe.com/course/back-end/typescript/express-com-typescript/5d873301-a228-40c3-85a3-621d4190cd71/conteudos/916d66d4-4b52-49ec-9edc-f062127806a9/criando-um-crud-de-livros/20913ab9-7322-4d3e-a0a3-13bc408cb0e4?use_case=side_bar
    return { id: insertId, ...product };
  }
}

export default ProductsModel;